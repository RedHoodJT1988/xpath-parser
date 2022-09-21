
// This was the start of what I was tyring to build
// as a parser for XML files. There was a lot of 
// concepts I was trying to figure out on my own 
// and was running out of time to submit this as I didn't
// want to spend too much time trying to figure this out,
// but I also didn't want to submit something partially. 

import { default as SaxonJS } from 'saxon-js';

const xml = `<root>
    <item>a</item>
    <item>b</item>
    <item>c</item>
</root>`;

const xmlDoc = await SaxonJS.getResource({ type: 'xml', text: xml });

console.log(SaxonJS.XPath.evaluate(`random-number-generator(current-dateTime())?permute(/root/item) = > serialize(map { 'method' : 'xml' , 'indent' : true() })`, xmlDoc));