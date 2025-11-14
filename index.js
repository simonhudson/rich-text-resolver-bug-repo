import { transformToPortableText } from "@kontent-ai/rich-text-resolver";

const foo = () => {
  const richText = "<p>Hello world</p>";
  const portableText = transformToPortableText(richText);
  console.log(portableText);
};

export default foo();
