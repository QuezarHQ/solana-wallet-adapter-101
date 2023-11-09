import React from 'react'

import { CodeBlock, dracula } from "react-code-blocks";


const Codeblock = ({ code, language }: {code: string, language: string}) => {
    return (
        <div className="p-2 m-5">
            <code>
                <CodeBlock
                    text={code}
                    language={language}
                    showLineNumbers={false}
                    theme={dracula}
                />
            </code>
        </div>
    )
}

export default Codeblock