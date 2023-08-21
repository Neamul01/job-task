import React, { useEffect } from "react";
import SelectFile from "./SelectFile";
import { Button } from "flowbite-react";

type FileType = {
  main_course_file: File | null;
  thumbnail_file: File | null;
  introduction_file: File | null;
};
export default function FileUpload() {
  const [file, setFile] = React.useState<File | null>(null);
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const [intro, setIntro] = React.useState<File | null>(null);
  const [files, setFiles] = React.useState<FileType>({
    main_course_file: null,
    thumbnail_file: null,
    introduction_file: null,
  });

  useEffect(() => {
    setFiles({
      main_course_file: file,
      thumbnail_file: thumbnail,
      introduction_file: intro,
    });
  }, [file, thumbnail, intro]);

  return (
    <form>
      <h3 className="text-h3">File Upload</h3>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col ">
          <p className="mb-[21px]">Main Course File</p>
          <SelectFile height={"300px"} setFile={setFile} />
        </div>
        <div className="flex flex-col ">
          <p className="mb-[21px] text-xl">Thumbnail File</p>
          <SelectFile height={"70px"} setFile={setThumbnail} />
        </div>
        <div className="flex flex-col ">
          <p className="mb-[21px] text-xl">Introduction File</p>
          <SelectFile height={"70px"} setFile={setIntro} />
        </div>
      </div>
    </form>
  );
}
