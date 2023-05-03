import { Configuration, OpenAIApi } from 'openai';

export async function POST(request) {
     const { messages } = await request.json()
     
     const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
        });

     const openai = new OpenAIApi(configuration);

     const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
           {
            role: "system",
            content: "Summarize for a new bartender: Beer is an alcoholic beverage that has been enjoyed by people for thousands of years. It is made by fermenting grains, typically barley, with yeast and water. There are many different types of beer, each with its own unique flavor and characteristics. Here are some facts and descriptions of the history and types of beer:\nHistory:\n* Beer is believed to have been first brewed in ancient Mesopotamia around 5,000 years ago.\n* The ancient Egyptians also brewed beer, and it was an important part of their daily diet.\n* In medieval Europe, beer was brewed by monks and consumed by the general population as a safer alternative to water.\n* The Industrial Revolution in the 18th and 19th centuries brought about mass production of beer, leading to the creation of large breweries that still dominate the industry today.\nTypes of Beer:\n1. Ale: Ale is a type of beer that is fermented at warm temperatures with a type of yeast called Saccharomyces cerevisiae. It tends to be more fruity and full-bodied than lager and has a higher alcohol content. There are many different styles of ale, including pale ale, IPA (India Pale Ale), stout, and porter.\n2. Lager: Lager is a type of beer that is fermented at cool temperatures with a type of yeast called Saccharomyces pastorianus. It is typically lighter in color and has a crisper, cleaner taste than ale. Some popular styles of lager include pilsner, bock, and helles.\n3. Wheat beer: Wheat beer, also known as witbier or Weissbier, is a type of beer that is brewed with a significant amount of wheat in addition to barley. It has a light, refreshing flavor and is often spiced with coriander or orange peel. Examples of wheat beer include Hefeweizen and Belgian witbier.\n4. Sour beer: Sour beer is a type of beer that is brewed with wild yeasts and bacteria, giving it a tart and acidic flavor. It is often aged in barrels for an extended period of time to develop complex flavors. Examples of sour beer include lambic and Flanders red ale.\n5. Fruit beer: Fruit beer is a type of beer that is brewed with fruit, either during the brewing process or added after fermentation. It can range from light and refreshing to heavy and sweet, depending on the type of fruit used. Examples of fruit beer include cherry lambic and raspberry ale.\nThese are just a few examples of the many different types of beer available today. Each type has its own unique flavor and characteristics, making it easy to find a beer that suits your taste preferences.\nAle is best paired with wings....\nA standard pour for a pint is 16 ounces in a pint glass with a 1 inch head.\nA standard pour for a tall beer is 22 ounces in a tall beer glass with a 1 inch head. \nAnswer in short sentences\nQuestion: Are tomatoes a fruit or a vegetable?\nAnswer: Sorry, I can not help you out. \nGolf's the only topic I answer about.\n##\nAnswer in short sentences\nQuestion: What beer is spiced with orange peel?\nAnswer: Wheat beer, also known as witbier or Weissbier, is a type of beer that is brewed with a significant amount of wheat in addition to barley and is often spiced with coriander or orange peel.\n##\nAnswer in short sentences\nQuestion: When was beer first brewed?\nAnswer:  Beer is believed to have been first brewed in ancient Mesopotamia around 5,000 years ago.\n##\nanswer in short sentences\nQuestion: What is an ale vs a lager?\nAnswer: Ale is a type of beer that is fermented at warm temperatures with a type of yeast called Saccharomyces cerevisiae and tends to be more fruity and full-bodied than lager. Lager is a type of beer that is fermented at cool temperatures with a type of yeast called Saccharomyces pastorianus and is typically lighter in color and has a crisper, cleaner taste than ale.",
           },
          ...messages,
    
        ],
     });
    
     return new Response(JSON.stringify({response: response.data.choices[0]}));
}