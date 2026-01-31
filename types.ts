import React from 'react';

export interface Cause {
  id: string;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  category: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: React.ElementType;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export enum DonationFrequency {
  ONCE = 'once',
  MONTHLY = 'monthly',
}

export interface NavLink {
  label: string;
  path: string;
}