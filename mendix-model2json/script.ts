import * as fs from "fs";
import {IAbstractUnit} from "mendixmodelsdk";
import {MendixSdkClient, Project} from "mendixplatformsdkv4";

const username = "[USERNAME]";
const apikey = "[API_KEY]";
const projectId = "[PROJECT_ID]";
const projectName = "[PROJECT NAME]";
const targetFolder = "[TARGET_FOLDER]";

async function main() {
    const client = new MendixSdkClient(username,apikey);
    let project = new Project(client, projectId, projectName);
    const workingCopy = await project.createWorkingCopy();
    const model = await workingCopy.model();
    const projectDocuments = await model.allProjectDocuments();
    await printToFile(projectDocuments);
    const allUnits = await model.allUnits();
    await printToFile(allUnits);
}

async function printToFile(list: any){
    for(var i = 0; i < list.length; i++){
        await list[i].load((unitLoaded: IAbstractUnit) => {
            let name = unitName(unitLoaded);
            const jsonResult = JSON.stringify(unitLoaded.toJSON(), null, 4);
            fs.writeFileSync(targetFolder + `/${name}.json`, jsonResult);
            console.log("Written result to " + targetFolder + `/${name}.json`);
        });
    }
}

function unitName(unit: any){
    if('name' in unit){
        return unit.name;
    }else{
        return unit.structureTypeName;
    }
}

main().catch(console.error);