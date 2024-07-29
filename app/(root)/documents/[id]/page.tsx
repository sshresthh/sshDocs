import Header from "@/components/Header";
import { Editor } from "@/components/editor/Editor";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justiry-center gap-2">
          <p className="document-title">Document Title</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
