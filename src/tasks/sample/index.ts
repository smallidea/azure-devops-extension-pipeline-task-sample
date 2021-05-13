import * as tl from 'azure-pipelines-task-lib/task'

async function run() {
    try{

        console.log("start -----------------------------");

        let input = tl.getInput("sampleInput", true)!; // 获取流水线任务中录入框输入的值
        if (input.toLowerCase() != 'jason') {
            tl.setResult(tl.TaskResult.Failed, '和Jason打个招呼吧！*^-^*');
            return;
        }
    
        console.log("end -----------------------------");

    }catch(error){
        tl.debug(JSON.stringify(error as Error, null, 4));
        tl.setResult(tl.TaskResult.Failed, typeof error == 'string' ? error as string : error.meesage);
    }
}

run();