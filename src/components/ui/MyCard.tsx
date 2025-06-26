import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";

export default function MyCard(){
    return(
        <Card >
                      <CardHeader className="text-center">
                        as
                      </CardHeader>
                      <CardTitle>
                            Special Offer
                      </CardTitle>
                        
                        <CardContent className="text-center">
                            <p className="text-lg font-semibold">Limited Time Offer</p>
                            <p className="text-sm text-gray-500">Hurry up! Only a few items left in stock.</p>
                        </CardContent>
                        <CardDescription >
                            
                                Get this amazing product at a discounted price. Don&apos;t miss out on this opportunity!
                            
                        </CardDescription>
                        <CardFooter>
                            <span className="text-lg font-medium">$49.99</span>
                            <span className="text-sm text-gray-500 line-through">$99.99</span>
                        </CardFooter>
                        <CardAction >
                            <Button >
                                Buy Now
                            </Button>
                        </CardAction>
                    </Card>
    );
}