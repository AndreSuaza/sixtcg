
import Welcome from "../../markdown/welcome.mdx"

function CustomH1({ children }: any) {
  return <h1 style={{ color: 'blue', fontSize: '100px' }}>{children}</h1>
}
 
const overrideComponents = {
  h1: CustomH1,
}

export default function Rey() {
  return (
    <article>
        
      <Welcome components={overrideComponents} />
    </article>
  
  );
}

