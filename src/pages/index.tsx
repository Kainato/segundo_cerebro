import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Meu Segundo Cérebro 🧠
        </Heading>
        <p className="hero__subtitle">
          Um repositório vivo de conhecimento, projetos e aprendizados
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.6' }}>
          Este espaço documenta minha evolução técnica, detalha meus projetos com propósito
          e serve como guia estruturado para transformar "repositórios parados" em
          <strong> conhecimento consolidado e portfólio vivo</strong>.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Saiba mais sobre mim ➡️
          </Link>
        </div>
      </div>
    </header>
  );
}

function ContentSection() {
  return (
    <section style={{ padding: '2rem 0', textAlign: 'center', marginTop: '2rem' }}>
      <div className="container">
        <Heading as="h2" style={{ marginBottom: '2rem' }}>
          Como Este Projeto Funciona
        </Heading>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'grey', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📚</div>
            <h3>Documentação de Projetos</h3>
            <p>
              Cada projeto é documentado com <strong>desafio</strong>, <strong>aprendizado</strong> e <strong>próximos passos</strong>. Não apenas código, mas narrativa.
            </p>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: 'grey', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
            <h3>Organizado por Aprendizados</h3>
            <p>
              Projetos agrupados por workshops ou temas, mostrando a evolução do conhecimento e a aplicação prática.
            </p>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: 'grey', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔄</div>
            <h3>Constante aprendizado</h3>
            <p>
              Cada projeto é um passo na jornada de aprendizado, mostrando não apenas o que foi feito, mas o que foi aprendido e o que vem a seguir.
            </p>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: 'grey', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
            <h3>Consolidação de Conhecimento</h3>
            <p>
              Explicar com suas próprias palavras (Técnica de Feynman) fixa o aprendizado muito mais
              do que apenas assistir a aulas.
            </p>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: 'grey', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎬</div>
            <h3>Referência Ética</h3>
            <p>
              Cada projeto vinculado com créditos ao curso/instrutor. Conhecimento compartilhado, origem respeitada.
            </p>
          </div>

          <div style={{ padding: '1.5rem', backgroundColor: 'grey', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
            <h3>Prova de Valor</h3>
            <p>
              Uma wiki pessoal bem estruturada conta mais sobre sua maturidade técnica do que 10 cursos completados isoladamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyThisMatters() {
  return (
    <section style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <Heading as="h2" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        O Desafio Que Isso Resolve
      </Heading>

      <div style={{
        backgroundColor: '#ffc107',
        border: '2px solid #fff3cd',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem'
      }}>
        <p style={{ fontSize: '1.1rem', margin: '0', color: '#1B1B1D' }}>
          <strong>O "Cemitério de Repositórios":</strong> Você faz cursos, sobe o código, e ele fica lá pegando poeira digital.
          Mas e se transformássemos isso em <strong>documentação viva que conta a história do seu crescimento?</strong>
        </p>
      </div>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
        Este projeto é a resposta para o desafio de transformar aprendizado em legado. Ele não é apenas um portfólio, mas um
        <strong> segundo cérebro</strong> que registra sua jornada técnica, consolidando conhecimento e mostrando evolução real.
      </p>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Meu Segundo Cérebro - Conhecimento, Projetos e Aprendizados"
      description="Um repositório vivo que documenta projetos, aprendizados e evolução técnica com foco em crescimento profissional">
      <HomepageHeader />
      <main>
        <ContentSection />
        <WhyThisMatters />
      </main>
    </Layout>
  );
}
