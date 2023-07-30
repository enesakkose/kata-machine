export default function bs_list(haystack: number[], needle: number): boolean {
  //low index 0 
  // high index haystack.length 
  // ortadan ikiye böl
  //needle değeri orta indexli değere eşitse return true
  //değilse en yüksek değeri medium kabul et
  //low değerimiz artık 0. index değil ortadaki değerin + 1 indexi
  let low =  0
  let high = haystack.length

  do{
    const medium = Math.floor(low + (high - low) / 2)
    const value = haystack[medium]

    if(value === needle){
      return true
    }else if(value > needle){
      high = medium
    }else{
      low = medium + 1
    }
  } while(low < high)

  return false
}