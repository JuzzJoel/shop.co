import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Category Page",
    description: "Category page description",
  };
};

export default function Home({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}
