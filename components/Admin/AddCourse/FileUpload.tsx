import React, { useEffect } from "react";
import SelectFile from "./SelectFile";

type FileType = {
  main_course_file: File | null;
  thumbnail_file: File | null;
  introduction_file: File | null;
};

type Props = {
  setAllFiles: (file: FileType) => void;
  handleSubmit: any;
};

export default function FileUpload({ setAllFiles, handleSubmit }: Props) {
  const [file, setFile] = React.useState<File | null>(null);
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const [intro, setIntro] = React.useState<File | null>(null);
  const [files, setFiles] = React.useState<FileType>({
    main_course_file: null,
    thumbnail_file: null,
    introduction_file: null,
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllFiles(files);
  };
  useEffect(() => {
    setFiles({
      main_course_file: file,
      thumbnail_file: thumbnail,
      introduction_file: intro,
    });
  }, [file, thumbnail, intro]);

  return (
    <form onSubmit={handleFormSubmit}>
      <h3 className="xl:text-h3 font-semibold text-2xl">File Upload</h3>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col ">
          <p className="mb-[21px] text-lg">Main Course File</p>
          <SelectFile height={"300px"} setFile={setFile} />
        </div>
        <div className="flex flex-col ">
          <p className="mb-[21px] text-lg">Thumbnail File</p>
          <SelectFile height={"70px"} setFile={setThumbnail} />
        </div>
        <div className="flex flex-col ">
          <p className="mb-[21px] text-lg">Introduction File</p>
          <SelectFile height={"70px"} setFile={setIntro} />
        </div>
      </div>
    </form>
  );
}
