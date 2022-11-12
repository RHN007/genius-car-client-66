const { useEffect } = require("react")
const useTitle = title => {
   useEffect(()=> {
       document.title = `${title} - Genius Cart Client`;
   }, [title])
}
 
export default useTitle ;