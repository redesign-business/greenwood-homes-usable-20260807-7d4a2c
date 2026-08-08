import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type ListItem = {
  image: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  listItems: ListItem[];
  buttons: ButtonProps[];
};

export type Layout621Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout621 = (props: Layout621Props) => {
  const { tagline, heading, description, listItems, buttons } = {
    ...props,
    ...Layout621Defaults,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
          <p className="text-medium">{description}</p>
        </div>

        <div className="grid grid-cols-1 border-t border-scheme-border md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-8">
          {listItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="border-b border-scheme-border py-6 last:border-b-0 md:border-b-0 md:py-8">
                <div className="mb-6 w-full overflow-hidden md:mb-8">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="aspect-video size-full rounded-image object-cover"
                  />
                </div>
                <h3 className="mb-5 text-h4 font-bold md:mb-6">{item.heading}</h3>
                <p>{item.description}</p>
              </div>
              {index < listItems.length - 1 && (
                <div className="hidden h-full w-px bg-scheme-border md:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 md:mt-10 lg:mt-12">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout621Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  listItems: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Relume placeholder image",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
    },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <ChevronRight className="text-scheme-text" />,
    },
  ],
};
