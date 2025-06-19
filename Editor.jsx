import CodeEditor from "../components/CodeEditor";
import { useData } from "../context/DataContext";

const Editor = () => {
  const { output, error } = useData();

  return (
    <div className="h-screen bg-[#111827] flex flex-row">
      <CodeEditor width={"50vw"} height={"100vh"} />
      <div className="w-1/2 bg-[#1E1E1E] dark:bg-gray-800 dark:border-gray-600">
        <div className="flex w-full h-[50px] sm:bg-[#1E1E1E] border-b border-[#333333]">
          <div className="flex items-center px-2 text-white">Output</div>
        </div>
        {output && output != undefined && (
          <>
            <div className="flex flex-col p-2 h-full">
              <div className="flex flex-col h-full">
                <div
                  className="flex flex-col flex-grow p-2 bg-[#1E1E1E] dark:bg-gray-800 dark:border-gray-600
            overflow-y-auto text-white"
                >
                  {output && output.status === "success" && (
                    <div className="text-green-500">Success</div>
                  )}
                  {output && output.status === "compile_error" && (
                    <div className="text-red-500">Compile Error</div>
                  )}

                  {output && output?.run[0]?.output && (
                    <div className="text-white">{output.run[0].output}</div>
                  )}

                  {output && output?.compile?.output && (
                    <div className="text-white">{output.compile.output}</div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Editor;
