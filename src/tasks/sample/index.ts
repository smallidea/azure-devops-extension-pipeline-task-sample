import * as tl from 'azure-pipelines-task-lib/task'

async function run() {
    console.log("start -----------------------------");

    let input = tl.getInput("sampleInput", true)!; // 获取流水线任务中录入框输入的值
    if (input.toLowerCase() != 'jason') {
        tl.setResult(tl.TaskResult.Failed, '和Jason打个招呼吧！*^-^*');
        return;
    }

    console.log("end -----------------------------");
}

run();