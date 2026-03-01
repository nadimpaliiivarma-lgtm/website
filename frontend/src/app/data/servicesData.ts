export interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  youtubeLink: string;
}

// helper to convert normal or shorts youtube link to embed format
const convertToEmbed = (url: string) => {
  if (url.includes("shorts")) {
    const id = url.split("/shorts/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("youtu.be")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return url;
};

export const servicesData: Service[] = [
  {
    id: "full-smile-rehabilitation",
    title: "Full Smile Rehabilitation",
    image: "/images/full-smile-rehabilitation.jpeg",
    description:
      "Full Smile Rehabilitation is a comprehensive treatment plan that restores the function, aesthetics, and health of your entire smile. It may include crowns, veneers, implants, and corrective procedures to achieve a balanced and confident smile.",
    youtubeLink: convertToEmbed(
      "https://youtube.com/shorts/A9qqZ4syBrY?si=7wy9f_tA4Pvyuzob"
    ),
  },
  {
    id: "correction-of-midline",
    title: "Correction of Midline",
    image: "/images/correction-of-midline.jpeg",
    description:
      "Midline correction improves the alignment between upper and lower teeth for better facial symmetry and smile aesthetics. This treatment enhances overall balance and confidence.",
    youtubeLink: convertToEmbed(
      "https://youtu.be/-O5KAd2S8aA?si=Eb5MnHHfJ2Rrke8E"
    ),
  },
  {
    id: "anterior-crown-restoration",
    title: "Anterior Crown Restoration",
    image: "/images/anterior-crown-restoration.jpeg",
    description:
      "Anterior crown restoration focuses on repairing and enhancing front teeth using high-quality crowns to restore strength, shape, and natural appearance.",
    youtubeLink: convertToEmbed(
      "https://youtube.com/shorts/e-afGhDfGrU?si=KIDisvPq98En0Ecf"
    ),
  },
  {
    id: "posterior-bridge-treatment",
    title: "Posterior Bridge Treatment",
    image: "/images/posterior-bridge-treatment.jpeg",
    description:
      "Posterior bridge treatment replaces missing back teeth using fixed dental bridges, restoring chewing function and maintaining proper alignment.",
    youtubeLink: convertToEmbed(
      "https://youtu.be/9jptx6l9PL4?si=eQalg15ltWoDiCXA"
    ),
  },
  {
    id: "tooth-whitening",
    title: "Tooth Whitening",
    image: "/images/tooth-whitening.jpeg",
    description:
      "Professional tooth whitening safely removes stains and discoloration, giving you a brighter and more radiant smile in a short time.",
    youtubeLink: convertToEmbed(
      "https://youtube.com/shorts/HjnHS_rdoY8?si=faL69Uh2JaQa3vQD"
    ),
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    image: "/images/dental-implants2.jpeg",
    description:
      "Dental implants are permanent tooth replacement solutions that look, feel, and function like natural teeth, restoring both confidence and oral health.",
    youtubeLink: convertToEmbed(
      "https://youtube.com/shorts/x2DrVwAqzZo?si=6ZNKVvr--oExoqFW"
    ),
  },
];