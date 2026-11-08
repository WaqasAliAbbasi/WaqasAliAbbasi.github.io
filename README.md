# Personal Website

Accessible at [waqasali.dev](https://waqasali.dev)

## UI

- [React](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)

## Deployment

- [GitHub Actions](https://github.com/features/actions)

## Resume

[`resume/resume.tex`](resume/resume.tex) ([LaTeX](https://www.latex-project.org)) is generated
from a private repo that manages all my resumes, and is overwritten on every publish:
don't edit it here.

CI builds it on every push to `main` and copies the PDF to `public/assets/docs/`, so
`resume.pdf` is a build artifact and is gitignored — don't commit it.

To build locally without installing a TeX distribution:

```sh
cd resume
docker run --rm -v "$PWD":/w -w /w --user "$(id -u):$(id -g)" \
  texlive/texlive:latest sh -c '"$@" && "$@"' sh \
  pdflatex -interaction=nonstopmode -halt-on-error resume.tex
```

This is the same command CI runs. It runs `pdflatex` twice because the PDF bookmarks only
get embedded on the second pass.

The `--user` flag matters: without it the container writes root-owned files into the repo.
