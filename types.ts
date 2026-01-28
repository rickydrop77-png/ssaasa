import React from 'react';

export interface CalculatorData {
  billAmount: number | '';
  name: string;
  phone: string;
  city: string;
  state: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}