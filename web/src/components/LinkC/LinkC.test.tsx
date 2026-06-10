import LinkC from "./LinkC.tsx";
import { test, expect } from '@playwright/test';

test("Case: link has text", async ({mount}) => {
    const component = await mount(
        <LinkC to="" text="Link" />
    );
    await expect(component).toContainText('Link');
});