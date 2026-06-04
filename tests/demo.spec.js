import {test} from '@playwright/test';
import { title } from 'node:process';

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.waitForTimeout(3000)
  //URL()
  const urlname=await page.url();
  console.log(urlname)
  //title()
  console.log(await page.title());
  await page.goBack();
  await page.goForward();
  await page.reload();
  await page.waitForTimeout(3000);
  await page.screenshot({path:'facebook.png'});
  await page.waitForTimeout(2000)
  console.log("sangeetha")
  
  //dropdown
  await page.goto("https://vinothqaacademy.com/drop-down/");
  await page.selectOption






  



}) //console .log add
//jfuhfu
//new changes