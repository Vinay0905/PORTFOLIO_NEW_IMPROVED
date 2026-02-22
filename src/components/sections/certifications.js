import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledCertificationsSection = styled.section`
  max-width: 900px;

  .certs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledCertCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
  }

  .cert-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    .cert-icon {
      color: var(--green);
      svg {
        width: 36px;
        height: 36px;
      }
    }

    .cert-external {
      color: var(--light-slate);
      svg {
        width: 18px;
        height: 18px;
      }
      &:hover {
        color: var(--green);
      }
    }
  }

  .cert-issuer {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--green);
    margin-bottom: 8px;
    letter-spacing: 0.05em;
  }

  .cert-title {
    font-size: var(--fz-lg);
    font-weight: 600;
    color: var(--lightest-slate);
    margin-bottom: 8px;
    flex-grow: 1;
  }

  .cert-date {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: var(--slate);
    margin-top: 16px;
  }
`;

const certifications = [
  {
    title: 'ChatGPT Prompt Engineering for Developers',
    issuer: 'DeepLearning.AI',
    date: 'October 2025',
    link: 'https://learn.deeplearning.ai/accomplishments/8a79aec1-5d5d-46ba-819b-67818b8a53c1?usp=sharing',
  },
  {
    title: 'Project Ambient Agents with LangGraph',
    issuer: 'LangChain',
    date: 'September 2025',
    link: 'https://academy.langchain.com/certificates/n1aewimfe4',
  },
  {
    title: 'Applied Skills: Get Started with Azure Management Tasks',
    issuer: 'Microsoft',
    date: 'October 2025',
    link: 'https://learn.microsoft.com/en-us/users/nagavinaya-9071/credentials/c551b7a42ad23c93',
  },
  {
    title: 'Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    date: 'February 11, 2026',
    link: 'https://learn.microsoft.com/en-us/users/nagavinaya-9071/credentials/497cb2a9e7a011e1',
  },
];

const Certifications = () => {
  const revealContainer = useRef(null);
  const revealCards = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
    revealCards.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledCertificationsSection id="certifications" ref={revealContainer}>
      <h2 className="numbered-heading">Certifications</h2>

      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <StyledCertCard key={i} ref={el => (revealCards.current[i] = el)}>
            <div className="cert-header">
              <div className="cert-icon">
                <Icon name="Star" />
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-external"
                aria-label={`View ${cert.title} certification`}>
                <Icon name="External" />
              </a>
            </div>

            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-title">{cert.title}</p>
            <p className="cert-date">{cert.date}</p>
          </StyledCertCard>
        ))}
      </div>
    </StyledCertificationsSection>
  );
};

export default Certifications;
