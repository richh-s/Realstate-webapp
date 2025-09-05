import * as Yup from 'yup';

export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const getInitialValues = (agentName: string): ContactValues => ({
  name: '',
  email: '',
  phone: '',
  message: `Hi ${agentName}, I'm interested in this property.`,
});

export const contactSchema = Yup.object({
  name: Yup.string().trim().required('Name is required'),
  email: Yup.string()
    .trim()
    .email('Email is invalid')
    .required('Email is required'),
  phone: Yup.string().trim(),
  message: Yup.string().trim().required('Message is required'),
});
