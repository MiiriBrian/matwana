//import react-dropzone 
//Simple React hook to create a HTML5-compliant drag'n'drop zone for files.
import React, {useCallback, useState} from 'react'
import {useDropzone, FileWithPath} from 'react-dropzone'
import { Button } from '../ui/button'

type FileUploaderProps = {
    fieldChange: (FILES: File[]) => void;
    mediaUrl:string;
}

const FileUploader = ({fieldChange, mediaUrl } :FileUploaderProps) => {
   //define "file" as an array of files
    const [file, setFile] = useState<File[]>([])
    const [fileUrl, setFileUrl] = useState(mediaUrl)

    //also define as an array of files
    const onDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
        // Do something with the files
        setFile(acceptedFiles);
        fieldChange(acceptedFiles);
        setFileUrl(URL.createObjectURL(acceptedFiles[0]))
      }, [file])

      const {getRootProps, getInputProps} = useDropzone({
        onDrop, accept: {
            'image/png':['.png'],
            'image/jpeg':['.jpeg'],
            'image/svg':['.svg']
        },   
            useFsAccessApi: false,
            })
  return (
    <div {...getRootProps()} 
        className='flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer'>
      <input {...getInputProps()} 
      className='cursor-pointer'/>
      {
        fileUrl ? (
            <>
                <div className='flex flex-1 justify-center w-full p-5 lg:p-10'>
                    <img src={fileUrl} alt="image"
                    className='file_uploader-img'/>

                </div>
                    <p className='file_uploader-label'>
                        Click or drag photo to replace
                    </p>
            </>
        ):( 
                <div className='file_uploader-box'>
                    <img src="/assets/icons/file-upload.svg" 
                    alt="file-upload"
                    width={90}
                    height={80} />
                <h3 className='base-medium text-light-2 mb-1 mt-5'> 
                    Drag photo here
                </h3>
                    <p 
                    className='text-light-4  small-regular mb-6'>JPG, PNG or SVG
                    </p>

                    <Button className="shad-button_dark_4" >
                        Select from Device
                    </Button>
                </div>

        )
        }
    </div>
  )
}

export default FileUploader