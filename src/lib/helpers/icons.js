import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFolder,
  faFolderOpen,
  faFile,
  faFileImage,
  faFilePowerpoint,
  faFilePdf,
  faFileExcel,
  faFileCode,
  faFileAudio,
  faFileArchive,
  faFileVideo,
  faFileWord,
  faFileAlt,
  faArrowAltCircleLeft
} from '@fortawesome/free-regular-svg-icons'
import {
  faSpinner,
  faSort,
  faSortAmountDownAlt,
  faSortAmountUp
} from '@fortawesome/free-solid-svg-icons'


export const bootstrapIconLibrary = () => {
  library.add(
    faFolder,
    faFolderOpen,
    faFile,
    faFileImage,
    faFilePowerpoint,
    faFilePdf,
    faFileExcel,
    faFileCode,
    faFileAudio,
    faFileArchive,
    faFileVideo,
    faFileWord,
    faFileAlt,
    faArrowAltCircleLeft,
    faSpinner,
    faSort,
    faSortAmountDownAlt,
    faSortAmountUp
  )
}
