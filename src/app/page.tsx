import { Button } from "@/components/ui/button"

export default function Home() {
 return (
  <div className="">
    
    <Button>Primary</Button>
    <Button variant={"secondary"}>
      Secondary
    </Button>
    <Button variant={"destructive"}>
      destructive
    </Button>
    <Button variant={"ghost"}>
      ghost
    </Button>
    <Button variant={"muted"}>
    muted
    </Button>
    <Button variant={"outline"}>
      outline
    </Button>
    
  </div>
 )
}
