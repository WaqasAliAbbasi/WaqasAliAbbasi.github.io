import { SimpleIcon } from "simple-icons";

/**
 * Each stack icon's own site, keyed by simple-icons slug. simple-icons only
 * ships a `source` for the logo file itself, which is often a brand page or a
 * commit on GitHub, so the homepages live here.
 */
const LINKS: Record<string, string> = {
  apachekafka: "https://kafka.apache.org",
  apachespark: "https://spark.apache.org",
  clickhouse: "https://clickhouse.com",
  clojure: "https://clojure.org",
  docker: "https://www.docker.com",
  githubactions: "https://github.com/features/actions",
  go: "https://go.dev",
  graphql: "https://graphql.org",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  jquery: "https://jquery.com",
  kotlin: "https://kotlinlang.org",
  kubernetes: "https://kubernetes.io",
  nextdotjs: "https://nextjs.org",
  postgresql: "https://www.postgresql.org",
  prisma: "https://www.prisma.io",
  python: "https://www.python.org",
  react: "https://react.dev",
  redis: "https://redis.io",
  redux: "https://redux.js.org",
  rust: "https://www.rust-lang.org",
  springboot: "https://spring.io/projects/spring-boot",
  tensorflow: "https://www.tensorflow.org",
  terraform: "https://developer.hashicorp.com/terraform",
  typescript: "https://www.typescriptlang.org",
  vuedotjs: "https://vuejs.org",
};

/**
 * Throws rather than rendering a dead chip, so adding an icon to the career
 * page without a link here fails the build instead of shipping quietly.
 */
export const stackLink = ({ slug, title }: SimpleIcon) => {
  const href = LINKS[slug];
  if (!href) {
    throw new Error(
      `No link for "${title}" (${slug}) in src/lib/stackLinks.ts`,
    );
  }
  return href;
};
