import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { globalHistory } from "@reach/router";
import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Box,
  Text,
  Link
} from "@chakra-ui/core";

import { Portrait } from ".";
import { InternalLink } from "./InternalLink";
import customTheme, { getPrimaryColor } from "../theme";

export const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigationBar: { title: string; path: string }[] = [
    { title: "Awards", path: "/achievements" },
    { title: "Projects", path: "/work" }
    // { title: "Blog", path: "/blog" }
  ];

  return (
    <Flex as="nav" direction="column">
      <Flex justify="space-between" align="center">
        <InternalLink to="/">
          <Flex align="center">
            <Portrait />
            <Heading marginLeft={3} textAlign="center">
              {siteTitle}
            </Heading>
          </Flex>
        </InternalLink>
        <IconButton
          aria-label="Dark Mode"
          size="xs"
          background={
            colorMode === "dark"
              ? customTheme.colors.gray[700]
              : customTheme.colors.gray[100]
          }
          icon={colorMode === "dark" ? "sun" : "moon"}
          onClick={toggleColorMode}
        />
      </Flex>
      <Flex align="center" marginTop={3} marginLeft={2} wrap="wrap">
        <InternalLink to={"/"}>
          <Box
            as={TiHomeOutline}
            size="15px"
            color={
              `/${globalHistory.location.pathname.split("/")?.[1]}` === "/"
                ? getPrimaryColor(colorMode)
                : undefined
            }
          />
        </InternalLink>
        <Text marginX={2}>|</Text>
        <Link href="/assets/docs/resume.pdf" marginRight={2}>
          Resume
        </Link>
        {navigationBar.map(({ title, path }) => (
          <Flex marginRight={2} key={path}>
            <InternalLink
              to={path}
              color={
                `/${globalHistory.location.pathname.split("/")?.[1]}` === path
                  ? getPrimaryColor(colorMode)
                  : undefined
              }
            >
              {title}
            </InternalLink>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
