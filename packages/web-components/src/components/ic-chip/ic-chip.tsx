import {
  Component,
  h,
  Prop,
  State,
  Listen,
  Event,
  EventEmitter,
  Element,
  Method,
  Watch,
} from "@stencil/core";
import {
  onComponentRequiredPropUndefined,
  isSlotUsed,
  removeDisabledFalse,
  convertToRGBA,
  checkResizeObserver,
} from "../../utils/helpers";
import { IcChipAppearance } from "./ic-chip.types";
import { IcColor, IcEmphasisType, IcSizes } from "../../utils/types";
import dismissIcon from "../../assets/dismiss-icon.svg";

/**
 * @slot icon - Content will be rendered at the start of the chip.
 * @slot badge - Badge component overlaying the top right of the chip.
 */
@Component({
  tag: "ic-chip",
  styleUrl: "ic-chip.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class Chip {
  private labelEl: HTMLElement;
  private resizeObserver: ResizeObserver;

  @Element() el: HTMLIcChipElement;

  @State() hovered: boolean = false;
  @State() labelOverflow: boolean = false;
  @State() visible: boolean = true;

  /**
   * @deprecated This prop should not be used anymore. Use variant prop instead.
   */
  @Prop() appearance?: IcChipAppearance;

  /**
   * The custom chip colour. This prop will be applied to the chip component if `dismissible` is set to `false`.
   * Can be a hex value e.g. "#ff0000", RGB e.g. "rgb(255, 0, 0)", or RGBA e.g. "rgba(255, 0, 0, 1)".
   */
  @Prop() customColor?: IcColor = null;

  @Watch("customColor")
  customColorHandler(): void {
    if (!this.dismissible) {
      this.setChipColour();
    }
  }

  /**
   * If `true`, the chip will appear disabled.
   */
  @Prop() disabled?: boolean = false;

  /**
   * If `true`, the chip will have a close button at the end to dismiss it.
   */
  @Prop() dismissible?: boolean = false;

  /**
   * The text rendered within the chip.
   */
  @Prop() label!: string;

  /**
   * The number of lines to display before truncating the text.
   */
  @Prop() maxLines?: number;

  /**
   * The size of the chip.
   */
  @Prop() size?: IcSizes = "default";

  /**
   * If `true`, the outlined variant of chip will have a transparent background rather than white.
   */
  @Prop() transparentBackground?: boolean = true;

  /**
   * The emphasis of the chip.
   */
  @Prop() variant?: IcEmphasisType = "filled";

  /**
   * @deprecated This event should not be used anymore. Use icDismiss instead.
   */
  @Event() dismiss: EventEmitter<void>;

  /**
   * Is emitted when the user dismisses the chip.
   */
  @Event() icDismiss: EventEmitter<void>;

  disconnectedCallback(): void {
    if (this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
    }
  }

  componentWillLoad(): void {
    removeDisabledFalse(this.disabled, this.el);

    if (!this.dismissible) {
      this.setChipColour();
    }

    if (this.appearance === "outline") {
      this.variant = "outlined";
    }
  }

  componentDidLoad(): void {
    onComponentRequiredPropUndefined(
      [{ prop: this.label, propName: "label" }],
      "Chip"
    );

    checkResizeObserver(this.runResizeObserver);
  }

  componentDidRender(): void {
    this.maxLines > 0 &&
      this.labelEl.setAttribute(
        "style",
        `--truncation-max-lines: ${this.maxLines}`
      );
  }

  @Listen("icDismiss", { capture: true })
  handleClick(): void {
    this.visible = !this.visible;
  }

  /**
   * Sets focus on the chip.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.el.shadowRoot.querySelector("button")?.focus();
  }

  private dismissAction = (): void => {
    this.dismiss.emit();
    this.icDismiss.emit();
  };

  private mouseEnterHandler = (): void => {
    this.hovered = true;
  };

  private mouseLeaveHandler = (): void => {
    this.hovered = false;
  };

  private setChipColour = () => {
    const colorRGBA = convertToRGBA(this.customColor);
    if (colorRGBA) {
      const { r, g, b, a } = colorRGBA;
      const foregroundColour =
        (r * 299 + g * 587 + b * 114) / 1000 > 133.3505 ? "black" : "white";
      this.el.setAttribute(
        "style",
        `--chip-custom-color: rgba(${r}, ${g}, ${b}, ${a}); --chip-custom-foreground-color: var(--ic-architectural-${foregroundColour})`
      );
    }
  };

  private runResizeObserver = () => {
    this.resizeObserver = new ResizeObserver(() => {
      this.labelEl &&
        (this.labelOverflow =
          this.labelEl.offsetWidth < this.labelEl.scrollWidth);
    });
    this.resizeObserver.observe(this.el);
  };

  render() {
    const {
      label,
      appearance,
      variant,
      size,
      dismissible,
      visible,
      disabled,
      hovered,
    } = this;

    return (
      visible && (
        <ic-tooltip
          label={label}
          class={{ "tooltip-disabled": !this.labelOverflow && !(this.maxLines >= 1) || hovered }}
        >
          <div
            class={{
              chip: true,
              [`${appearance}`]: appearance !== undefined,
              [`${variant}`]: true,
              [`${size}`]: true,
              disabled,
              dismissible,
              hovered,
              "white-background":
                this.variant === "outlined" && !this.transparentBackground,
            }}
          >
            {isSlotUsed(this.el, "icon") && (
              <div class="icon">
                <slot name="icon" />
              </div>
            )}
            <ic-typography
              ref={(el) => (this.labelEl = el)}
              variant="label"
              apply-vertical-margins={false}
              class="label"
              maxLines={this.maxLines}
            >
              {label}
            </ic-typography>
            {dismissible && (
              <ic-tooltip
                label="Dismiss"
                target="dismiss-icon"
                class={{ "tooltip-disabled": disabled }}
              >
                <button
                  id="dismiss-icon"
                  class="dismiss-icon"
                  aria-label={`Dismiss ${label} chip`}
                  disabled={disabled}
                  tabindex={disabled ? -1 : 0}
                  onClick={this.dismissAction}
                  onMouseEnter={this.mouseEnterHandler}
                  onMouseLeave={this.mouseLeaveHandler}
                  innerHTML={dismissIcon}
                ></button>
              </ic-tooltip>
            )}
            {isSlotUsed(this.el, "badge") && <slot name="badge"></slot>}
          </div>
        </ic-tooltip>
      )
    );
  }
}
