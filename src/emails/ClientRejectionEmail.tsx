import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Hr,
} from '@react-email/components';

interface ClientRejectionEmailProps {
  clientName: string;
  rejectionReason?: string;
}

export const ClientRejectionEmail = ({
  clientName,
  rejectionReason = "Unfortunately, we are fully booked for those dates or unable to accommodate your specific request at this time.",
}: ClientRejectionEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Update on Your Booking Inquiry</Heading>

          <Text style={text}>
            Hi {clientName},
          </Text>

          <Text style={text}>
            Thank you for reaching out to Amanda's Critter Care. We appreciate you considering us for your pet care needs.
          </Text>

          <Text style={text}>
            {rejectionReason}
          </Text>

          <Text style={text}>
            We know how important it is to find the right care for your pets, and we apologize that we cannot assist you this time. We would love the opportunity to help you in the future when we have availability!
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

export default ClientRejectionEmail;
