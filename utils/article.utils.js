import { SECTION_TYPE } from "../constants"

export const getSection = (section) =>{
    if(section){
        switch(section?.type){
            case SECTION_TYPE.TEXT_BLOCK :
                return(
                    <p className="mb4 px3">
                        {section?.content}
                    </p>  
                )
            case SECTION_TYPE.IMAGE :
                return(
                    <amp-img
                        src={section?.mediaUrl}
                        width={section?.meta?.width}
                        height={section?.meta?.height}
                        layout="responsive"
                        alt={section?.meta?.alt}
                        className="mb4 mx3 br5"
                    ></amp-img>
                )
        }

    }
}