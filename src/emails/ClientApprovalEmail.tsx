import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from '@react-email/components';

interface ClientApprovalEmailProps {
  clientName: string;
}

export const ClientApprovalEmail = ({
  clientName,
}: ClientApprovalEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Your Booking is Approved!</Heading>

          <Text style={text}>
            Hi {clientName},
          </Text>

          <Text style={text}>
            Great news! We have reviewed your booking inquiry and we're thrilled to let you know that we are available to care for your pet(s) during those dates.
          </Text>

          <Section style={highlightSection}>
            <Text style={highlightText}>
              You will receive a Stripe invoice shortly to complete your booking.
            </Text>
          </Section>

          <Text style={text}>
            Once the invoice is paid, your booking will be fully confirmed. We can't wait to spend time with your furry family members!
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            Best regards,<br/>
            Amanda<br/>
            Amanda's Critter Care
          </Text>
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
  padding: '40px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '0 48px',
};

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 48px',
};

const highlightSection = {
  backgroundColor: '#e0f2fe',
  padding: '20px',
  margin: '20px 48px',
  borderRadius: '8px',
  borderLeft: '4px solid #0284c7',
};

const highlightText = {
  color: '#0369a1',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: 0,
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '30px 48px',
};

const footer = {
  color: '#666',
  fontSize: '14px',
  lineHeight: '24px',
  padding: '0 48px',
};

export default ClientApprovalEmail;
