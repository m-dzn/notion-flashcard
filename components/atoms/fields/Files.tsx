import React from "react";
import styled from "styled-components";

import { FilesObject } from "@/lib/notion";
import { TOKEN } from "@/styles";

interface Props {
  prop: FilesObject["files"];
}

export const Files = ({ prop }: Props) => {
  const onDownload = (filename: string, url: string) => {
    if (url) {
      fetch(url, {
        method: "GET",
      })
        .then((response) => response.blob())
        .then((blob) => {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          a.remove();
        });
    }
  };

  return (
    <Container>
      {prop?.map((item) => {
        let url = "";

        if ("external" in item) {
          url = item.external.url;
        } else if ("file" in item) {
          url = item.file.url;
        }

        return (
          <File key={item.name} onClick={() => onDownload(item.name, url)}>
            {item.name}
          </File>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  line-height: inherit;
`;

const File = styled.div`
  font-size: ${TOKEN.FONT_SIZE.SMALL}px;
  line-height: inherit;

  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;
