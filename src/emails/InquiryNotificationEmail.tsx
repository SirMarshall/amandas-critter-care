import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Heading,
  Hr,
} from '@react-email/components';

interface InquiryNotificationEmailProps {
  clientName: string;
  petType: string;
  checkInDate: string;
  checkOutDate: string;
  inquiryId: string; // Used for the action buttons
}

export const InquiryNotificationEmail = ({
  clientName,
  petType,
  checkInDate,
  checkOutDate,
  inquiryId,
}: InquiryNotificationEmailProps) => {
  const baseUrl = process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:3001';

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Booking Inquiry!</Heading>
          <Text style={text}>
            You have received a new booking inquiry from <strong>{clientName}</strong>.
          </Text>

          <Section style={detailsContainer}>
            <Text style={text}><strong>Pet Type:</strong> {petType}</Text>
            <Text style={text}><strong>Check-in Date:</strong> {checkInDate}</Text>
            <Text style={text}><strong>Check-out Date:</strong> {checkOutDate}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={text}>
            Please review the inquiry and decide whether to approve or reject the booking.
          </Text>

          <Section style={buttonContainer}>
            <Button
              style={approveButton}
              href={`${baseUrl}/api/inquiries/${inquiryId}/approve`}
            >
              Approve & Send Invoice
            </Button>
            <Button
              style={rejectButton}
              href={`${baseUrl}/api/inquiries/${inquiryId}/reject`}
            >
              Reject Booking
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '0 48px',
  textAlign: 'center' as const,
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 48px',
};

const detailsContainer = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  margin: '20px 48px',
  borderRadius: '4px',
};

const buttonContainer = {
  textAlign: 'center' as const,
  padding: '0 48px',
  marginTop: '24px',
  display: 'flex',
  gap: '16px',
  justifyContent: 'center',
};

const button = {
  borderRadius: '4px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

const approveButton = {
  ...button,
  backgroundColor: '#22c55e', // Green
};

const rejectButton = {
  ...button,
  backgroundColor: '#ef4444', // Red
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

export default InquiryNotificationEmail;
