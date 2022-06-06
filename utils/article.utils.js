import { SECTION_TYPE } from "../constants"

export const getSection = (section) =>{
    if(section){
        switch(section?.type){
            case SECTION_TYPE.TEXT_BLOCK :
                switch(section?.meta?.type){
                    case "p" :
                        return(
                            <p className="mb4 px3">
                                {section?.content}
                            </p>  
                        )
                    case "h1" :
                        return(
                            <h1 className="mb4 px3">
                                {section?.content}
                            </h1>  
                        )
                    case "h2" :
                        return(
                            <h2 className="mb4 px3">
                                {section?.content}
                            </h2>  
                        )
                    case "h3" :
                        return(
                            <h3 className="mb4 px3">
                                {section?.content}
                            </h3>  
                        )
                    case "h4" :
                        return(
                            <h4 className="mb4 px3">
                                {section?.content}
                            </h4>  
                        )
                    default :
                        return(
                            <p className="mb4 px3">
                                {section?.content}
                            </p>  
                        )

                }
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
            default :
                return ""
        }

    }
}