// imports and applies the jest extensions
import "tsarch/dist/jest"
import {describe, it, expect} from "vitest";

// imports the files entrypoint
import {filesOfProject} from "tsarch"

describe("architecture", ()=> {
    // we use async await in combination with jest since this project uses asynchronous calls
    it("business logic should not depend on the ui", async ()=> {
        const rule = filesOfProject()
            .inFolder("business")
            .shouldNot()
            .dependOnFiles()
            .inFolder("ui")

        await expect(rule).toPassAsync()
    })

    it("business logic should be cycle free", async ()=> {
        const rule = filesOfProject()
            .inFolder("*")
            .should()
            .beFreeOfCycles()

        await expect(rule).toPassAsync()
    })
})