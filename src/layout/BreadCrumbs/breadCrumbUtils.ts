interface Breadcrumb {
  label: string;
  link: string;
}

export const generateBreadcrumbs = (pathname: string): Breadcrumb[] => {
  const pathnames = pathname.split("/").filter((x) => x);
  const breadcrumbs: Breadcrumb[] = [{ label: "Home", link: "/" }];

  pathnames.forEach((pathname, index) => {
    const link = "/" + pathnames.slice(0, index + 1).join("/");
    const label = pathname.charAt(0).toUpperCase() + pathname.slice(1);
    breadcrumbs.push({ label, link });
  });

  return breadcrumbs;
};
