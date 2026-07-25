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

Source lives in [`resume/resume.tex`](resume/resume.tex) ([LaTeX](https://www.latex-project.org)).

CI builds it on every push to `main` and copies the PDF to `public/assets/docs/`, so
`resume.pdf` is a build artifact and is gitignored — don't commit it.

To build locally without installing a TeX distribution:

```sh
cd resume
docker run --rm -v "$PWD":/w -w /w --user "$(id -u):$(id -g)" \
  texlive/texlive:latest pdflatex -interaction=nonstopmode -halt-on-error resume.tex
```

The `--user` flag matters: without it the container writes root-owned files into the repo.
