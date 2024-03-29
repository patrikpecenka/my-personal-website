import { useTranslation } from 'react-i18next';

const projectsData = () => {
  const { t } = useTranslation("translation")

  return [
    {
      id: 1,
      download_url: "https://www.gstatic.com/webp/gallery/2.webp",
      title: "Title 1",
      webHref: "https://www.example.com/book1",
      gitHref: "",
      active: true,
      text: t("portfolio_projects.project_1")
    },
    {
      id: 2,
      download_url: "https://www.gstatic.com/webp/gallery/2.webp",
      title: "Title 2",
      webHref: "https://www.example.com/book2",
      gitHref: "",
      active: true,
      text: t("portfolio_projects.project_2")
    },
    {
      id: 3,
      download_url: "",
      title: "Work In Progress",
      webHref: "",
      gitHref: "",
      active: false
    },
    {
      id: 4,
      download_url: "",
      title: "Work In Progress",
      webHref: "",
      gitHref: "",
      active: false
    },
    {
      id: 5,
      download_url: "",
      title: "Work In Progress",
      webHref: "",
      gitHref: "",
      active: false
    },
    {
      id: 6,
      download_url: "",
      title: "Work In Progress",
      webHref: "",
      gitHref: "",
      active: false
    }
  ]
};

export default projectsData;