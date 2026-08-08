## components/relume/Navbar2.tsx

```tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, type ButtonProps } from "@/components/ui/button";
import { KeyboardArrowDown } from "relume-icons";
import { Card } from "@/components/ui/card";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar2 = (props: Navbar2Props) => {
```

## components/relume/Header113.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header113Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header113 = (props: Header113Props) => {
```

## components/relume/Layout1.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout1 = (props: Layout1Props) => {
```

## components/relume/Portfolio12.tsx

```tsx
import { Badge } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Tag = {
  label: string;
  url: string;
};

type ProjectProps = {
  title: string;
  description: string;
  image: ImageProps;
  url: string;
  button: ButtonProps;
  tags: Tag[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  projects: ProjectProps[];
  button: ButtonProps;
};

export type Portfolio12Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio12 = (props: Portfolio12Props) => {
```

## components/relume/Layout621.tsx

```tsx
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
```

## components/relume/Testimonial5.tsx

```tsx
import { StarFull } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  logo: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial5 = (props: Testimonial5Props) => {
```

## components/relume/Footer3.tsx

```tsx
import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo, YoutubeLogo } from "relume-icons";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  label: string;
  value: string;
};

type Contact = {
  label: string;
  phone: string;
  email: string;
};

type Props = {
  logo: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer3 = (props: Footer3Props) => {
```
