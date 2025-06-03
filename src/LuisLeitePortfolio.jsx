
import React, { useState, useEffect } from 'react'; // Corrigido: importando 'React', 'useState', e 'useEffect' de uma só vez
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './i18n'; // Importando o arquivo de configuração do i18next



function Card({ children }) {
  return <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, marginBottom: 20 }}>{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

export default function LuisLeitePortfolio() {
  const [formStatus, setFormStatus] = useState(null);
  const { t, i18n } = useTranslation(); // Hook do i18next

  // Função para redirecionar para o portfólio após a seleção do idioma
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Altera o idioma
    localStorage.setItem('language', language); // Salva a escolha do idioma
  };

  useEffect(() => {
    // Verifica se há um idioma armazenado no localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);  // Muda o idioma se for diferente do atual
    } else if (!savedLanguage) {
      i18n.changeLanguage(i18n.language);  // Se não houver idioma salvo, usa o idioma padrão
    }
  }, [i18n]);
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/meogenkq", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setFormStatus("success");
      form.reset();
    } else {
      setFormStatus("error");
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-sm">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-blue-800">Luis Henrique C. Leite</h1>
        <p className="text-gray-600">{t('subtitle')}</p>
        
        {/* Seção de seleção de idioma com ícones de bandeiras */}
        <div className="flex justify-center gap-4 mt-4">
          <img
            src={`${import.meta.env.BASE_URL}flags/br.png`}
            alt="Português"
            onClick={() => handleLanguageChange('pt')}
            style={{ cursor: 'pointer', width: 30, height: 20 }}
          />
          <img
            src={`${import.meta.env.BASE_URL}flags/gb.png`}
            alt="English"
            onClick={() => handleLanguageChange('en')}
            style={{ cursor: 'pointer', width: 30, height: 20 }}
          />
        </div>

        <div className="flex flex-col items-center gap-2 mt-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-blue-600" />
            <a
              href="https://linkedin.com/in/luishchagas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/luishchagas
            </a>
          </div>

          {/* Botão de download do CV */}
          <a
            href={`/luisleite-portfolio/LuisChagas_CV_${i18n.language.toUpperCase()}.docx`}
            download
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {t('downloadCV')}
          </a>
        </div>
      </header>

      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{t('aboutMe')}</h2>
          <p>{t('aboutMeDescription')}</p>
        </CardContent>
      </Card>


      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{t('coreSkills')}</h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-x-10">
          <li>{t('skills.selenium')}</li>
          <li>{t('skills.postman')}</li>
          <li>{t('skills.languages')}</li>
          <li>{t('skills.databases')}</li>
          <li>{t('skills.devops')}</li>
          <li>{t('skills.cloud')}</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5 space-y-4">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{t('highlightedProjects')}</h2>
          <div>
            <h3 className="font-semibold">{t('projects.benfatto.title')}</h3>
            <ul className="list-disc list-inside">
            <li>{t('projects.benfatto.item1')}</li>
            <li>{t('projects.benfatto.item2')}</li>
            <li>{t('projects.benfatto.item3')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">{t('projects.dextra.title')}</h3>
            <ul className="list-disc list-inside">
            <li>{t('projects.dextra.item1')}</li>
            <li>{t('projects.dextra.item2')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">{t('projects.ciandt.title')}</h3>
            <ul className="list-disc list-inside">
            <li>{t('projects.ciandt.item1')}</li>
            <li>{t('projects.ciandt.item2')}</li>
            <li>{t('projects.ciandt.item3')}</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{t('education')}</h2>
          <ul className="list-disc list-inside">
          <li>{t('education.postgraduate')}</li>
          <li>{t('education.specialization')}</li>
          <li>{t('education.bachelor')}</li>
          <li>{t('education.certifications')}</li>
          </ul>
        </CardContent>
      </Card>

      {/* === Bloco do formulário de contato === */}
      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{t('contact')}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">{t('name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {t('sendMessage')}
            </button>
          </form>
          {formStatus === "success" && (
            <p className="mt-3 text-green-600">{t('success')}</p>
          )}
          {formStatus === "error" && (
            <p className="mt-3 text-red-600">{t('error')}</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">{t('githubSection')}</h2>
          <p>{t('githubMessage')}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-blue-600">
            <a
              href="https://github.com/luiishcl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <FaGithub className="text-blue-600" /> github.com/luiishcl
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
