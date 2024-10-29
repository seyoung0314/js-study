
// truthy, falsy : js는 논리가 아닌 데이터를 논리로 표현가능
// 0,null,'',undefined,NaN => false로 취급
if(false) console.log('참입니다.false');
if(0) console.log('참입니다.0');
if(null) console.log('참입니다.null');
if(undefined) console.log('참입니다.undefinde');
if(NaN) console.log('참입니다.NaN');
if('') console.log(`참입니다.''`);
if(' ') console.log(`참입니다.' '`); //true
if(-100) console.log(`참입니다.-100`); //true
if([123]) console.log(`참입니다.[123]`); //true
if(function(){}) console.log(`참입니다.function`); //true
