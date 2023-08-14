软件名称:可推

项目注册地址:http://sh09.mykshow.cn/s/n7UmrerezAVY3BFi7yQ3BjM2FEUIzAzu

邀请码:94867530

收益其他的不清楚,大佬叫写的脚本

必要变量:

变量名 soy_kt_data
变量值 抓包找带有 https://api.ketui.cn/ 链接的请求头上的 Authorization 值

多个号用 # 或 @ 或 换行 隔开

一天最少跑8小时,间隔是1小时
cron: 25 6-15 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_kt.js

*/

const $ = new Env('【可推】版本:22/03/23_0');
const notify = $.isNode() ? require('./sendNotify') : '';


var _0xodE='jsjiami.com.v6',_0xodE_=['‮_0xodE'],_0x47bd=[_0xodE,'LsOZw43Cl0A=','w4Uwwr/Dj8Ke','w7UIwqDDqcKo','EgDDlCQZ','CsKTfMKBw7A=','w7kUw7nDlms=','wr4ew6zDqcKL','K8KxwpoLw7c=','wrfDjzB0Sw==','KMOPw4DCi3s=','w6HDo3NzPQ==','wpLDpyE=','M8Ohw649wqA=','woXDoDNpwrA=','w5rCtyNyfw==','B8OZw6MPwp4=','PQPCucO0aQ==','wqEgw7M=','euOAlMOCwrUv6IS/5p+l5o6b56avIVII6LSD5Y+Yw4o=','wrIEDWJF','w6zpoILmlLzmiaLnpazljI7jga/Cu8Oz57+Z57mA6K6G5rGV5aeE6LWb','wrF3w77DhsKh','V+mgg+aVo+aKi+ens+WNjeOCtlsX57+A57q06K2M5rGL5aWa6LS1','C8KIEMOmHQ==','wqsHw6PDs1Q=','w4Ihw47DkzA=','wpkHC2Zf','L8KUJcOPDA==','XyZnwpZ1','PMO4w5HCu34=','aemFjOW6gQ==','HX3CsmB8','wqvCkMK6','Q+OCjcOzwrFX6ISk5pyL5oy656aMw7cER+i3n+WOoDU=','wpbDoMOdSsKn','wphYwo/CmixB','wpgicA==','wrRrwow=','w4jjgKzCpMODKOiEjeacqOaMheemisKAIWTotqjljZ3Dsg==','w742wrPDm8KU','L+WVm+WTqOWIr+ijhOOBn8Ocw4Lnv5DnuLnorLbms4PlpJTot7M=','w4bjgpTDv0Yp6ISR5p2S5o2R56epwqXCsVzotLHljIJe','wofCiBBOeA==','w53llazlkLzli4DooLfjgLdHw6vnvKPnu4PorLPmsLLlpZfotq8=','MMOQw7jCr0s=','wrzDnQJtfA==','w43jg6/CrsK/w6Poho/mn7rmjrjnpbjCkExU6Lek5Y2vVw==','wrfogqXphJjnpoLlj6njg5AZw5HnvrjnuZ3or7jms7HlpZ/ot7U=','wqlmwovDhcO1','CuiCvumHueenj+WMoOOCjn7Dmue8uee6veist+axnuWnn+i2lg==','woQsZUzDiA==','wq4fw6jDm8KPw7/DgQ==','w5suw5jDhS0=','w47nrpjliYTjgLo6wq0=','am9bdcOfKQ==','w7jojrPlvbxY','w4rDmk5x','w53og5fphLI=','w6Tjg7YHRHnohpfmnrjmjYnnp5sIeTDotLHljahS','NkfClGdN','Y3JO','wo/jg6bChcOZNuiEreadm+aPn+enj8OSw47Dgei0hOWOi1c=','wo7nr4XliIrjgIFEw4M=','wqbDqcO3QsKs','FMOBw4bCsGY=','fHVGSMOrIcKJwobDssOKwrLDpETCpMOkw7tVw6jChcOIc1TCiMOgLMKCwoowAy1TPAXDhnPCi8O1wrzDvhbCnQYMwrPCtsKvw63DsBzChMOQwqDDnsKIw4l+LcOGHxLCmWXCtTDChEZpOH9gZinCjcKaG8OJTsK7w4PCvsKETH3CmcOFZwPDk2E+wqHChsO2w7pEcld/G8OnIsOMXcKzVzXDp2oKQUTCkD/Dh0Q=','PcKINMOiMA==','wqvDlMOieCY=','w74pwpzDv8K7','wpPDocOe','Z+ODkBTDgjzohafmnKbmj63npa8oE8KK6LaB5Yy0dA==','w6zCmMKSw5M3','wqLpoafml73miYHnpIbljJ7jgqA9wpnoj6rlvYsV','TlLDtcOH','w6zDvTzCu8Opf8Onw5rDtw==','f+mHuOW7sQ==','wppPwok=','w70/w7Fcw6M=','wojjg7E+ZUPohIHmnp3mj5fnpoNww7EY6LWu5Y61wrc=','w6/opYjpo7Llpbjlio/jgZV9dg==','w6DChMKEw7s8UA==','w4Mww5Y=','DuOApnt1woXohIzmnrrmjZLnprE1w5fDtui3lOWNtMKs','wpoycsKOw40=','aeWWoOWTteWLouijn+OCmWnCiee+pOe5leivp+azo+Wnrei0pQ==','e+OCpcOfMMKQ6IW15p245o6656aEw4vCqyfotYDljInCgA==','wpLll7DlkbbliLvoo6fjgaHDtMOd57yA57uj6K2S5rOO5aem6LS8','OcO8w7LCrUs=','wqXConHCoMO2PQ0=','ClfCr8KxTsKY','wqBTwowcw74=','worChwBK','M0DCg3Y=','w7bCsgVQag==','KjfDmw==','bVhsf8KE','LuWWhOWTqeWJmeiit+OCuMKww5E=','JMKPU8Kkw70=','w5QowrHDk8KC','w6YNw5jDi1I=','IT3DiA==','wo/DqcO0Z8Ks','IMKIUMKQw48=','w47li6Dku5/mlJ3nm4rjgpzCrsK5576w57u56K6j5rGf5aSm6La6','dFd6acKZ','GsOvw4LCilQ=','EsO3wqHCg8KgLMOC','LsKwAcOAKw==','w4Xjgp4QQUfohZ7mnavmjobnp6clIzrotrrljZsT','JOetiOWIuOeKrOaDveOAh8KswqLnv5rnu4TorI3mspnlp4PotqY=','IcK3w5B7woo=','w6fli7nkubbml6bnmZDjgoTDrEg=','fWJ9TcK3','w47jgKptZHDohpXmnrHmjbznppzDmMKlNOi1ouWNlDk=','UOWIguS4muaXrOeanOOAtMOzaw==','LMOvw7LCk11Z','JcKJUw==','wp0jc1rDlQ==','wo7ogYbph7XnpKzljbvjg7LCrcOh5omP5Yu06I2D5b25M+iDjOmFoA==','wqxnwog=','w57DmkhjGw==','LMOvw7LCnUFaQg==','w4Hjgb3DqcO3wpnohoHmnojmjZvnp6tYw7Yp6LSF5YybwrA=','V+ilg+mhguWmluWJvuOBmcKdQeaIp+WIjuiPn+W8rDHogpbph58=','w7fjgLrCjsK4JuiEvOadkeaMm+eliDLDqV3otYDljb01','wqXopLDpoaflp6Dli77jgKZNLw==','AF3CssKkTg==','SCRmwoRS','wplewrbDiMOq','woXCqlfCssOt','a8KLbSbClA==','wrJowpsNw4w=','wrbDtCdmwoY=','A8ORwpXCr8Kn','wqoqw6A=','wpLDksOBwrrCmA==','woYew67DgsKt','Qm5dYsOh','wrjjgqbDhEPDtuiFquafouaMreelqxLCiMKh6Lex5Y+uJQ==','CuetjeWKseOCt8Orw6DnvoznubLorqjms4TlpoDotb0=','BOODklshwqbohrPmnqbmjKHnp6rDicO3Zei3heWPiCI=','w5Xnr7zliaXjgKLDv8Kr572/57qy6K6n5rGr5aSl6LeC','wrfDpxF1wqY=','X8KuOMKmBw==','IcOaSRNq','IMOzw6TCu1Y=','V+iBuOmEnOenvOWPiuOBmcKdQee9pue5jeiun+azueWkuOi1jg==','w5fDmMOB','wr4gw63Dp2fCkVQNI8K0wpc=','wobDsjlawrE=','w4I1wpDDrMK4','YUR6WcKTcsOz','wqnCvmfChsOh','w6Dog7XphKDnppzljojjgYZdBeaJpuWLk+iMlOW8klDog6PphoM=','wqLCiMKIwofDuQ==','w6nCpR1uSA==','GMObw4g6wpE=','wpLogYvphbjnpJDljorjgaHDtMOd','wr1rw6jDrsKqwp4=','LGHCkcKdYg==','w4Iqw6vDsVk=','wp3jgYjCpMORwpXoh5vmnI/mjKHnp5PCrCLCnui1iOWMpxg=','wrfoj6/lvYDCng==','wrx4w67Dgg==','a8KlP8KNHcKYO8OgE8OAOw==','SeiBrOmHqg==','wrMOw7jDgcKo','woDDqxJ9wo0=','woF0wpLDvSY=','YMKnPsKrLA==','wrkJIg==','w5Aaw7h/w7I=','H8KvEsODIQ==','wpDDusOzwpnCuj4P','GcKvNMOZNxRkWg==','wqlTcGJnw6jDicONw5XCnsKnfiHDl17CsHfCtMKZFMKJw6FbSxXDrcOuw53DjB/Cu34ORDk3QHgGw5LCt8O5XcK7w6lbwpzDnw==','wrg6Z1XDrg==','wo0cw5PDgMKv','PmDColtk','w5rDgsOUW8OJ','wrUtX8Kzw7o=','YS1/wppq','w4EewpPDj8K1','w6kjw7pPw6A=','D8K3cMKxw5M=','wqghw6I=','WSxPwqxOw6sbwp4JFcKh','w68dw4x0w7I=','wqHDryFywrY=','wqlGwoYJw78=','HsOrwrfCpcK3','w47opKDpo6Xlpb3lirHjgpzCrsK5576w57u56K6j5rGf5aSm6La6','w5XopYTpo4TlpaXlibTjgpoUTue8gee7teivo+aypeWmnei0jQ==','w5/DgMOjYsO9','TzFEwrBKw7sh','AcOfw6crwrk=','w4cewrLDmMKD','BeOAjVpXw5XohZTmn4rmjLLnprvDiMOswqzotIPljKHCpw==','w4vnrobliq3ni6Pmg5DjgpjDuMOU57+A57u86K+M5rCl5aSB6Le1','w5Xnr7zliaXnioXmg4TjgpoUTue8gee7teivo+aypeWmnei0jQ==','w7/CiMKF','w6vCjylvQg==','Q+iku+mhr+WkmuWIouOBqcOMGeaImOWLo+iNp+W+p8KN6IKS6Yaz','RClAwplm','wpUOUsK7w5Y=','w7LCgD95Xw==','JMKQYMK7w4U=','CMKyFcOuKhlv','w5LjgJTCmBfDo+iEouacquaNheelrcO/w6DDtOi2veWMnX0=','AMO/QQxk','w6Top7zpoo/lpZ3lirjjgp7Cp8KM','w7jliILkuYDmlY7nmZDjgKk8wrXnvIbnuI7orLrmspvlpqrot48=','wo1cwo4Zw7g=','wpVQworDgcOv','M0bClw==','T0HDs8OrwqLCpw==','JcK2ecKZw70=','wqh4fW9F','wqzCv2Q=','CuiCvumHueenj+WMoOOCjn7Dmg==','wpLDrcO1woDCoDQ=','wrZMwpkww40=','XsOYw4UxwoABM0XDn8KCw6JaCcKJw4XCncK/wpvCrltkw5/Dpw==','wrgSWcKTw5E=','IMOKwprCuMKL','wqTDmMO+wrfCpw==','wonCvMK4wqLDgg==','aeODrcKNI8Oq6IWi5p+a5o+p56SyUcO9Hei2k+WOmFw=','wrFqwo8dw6I=','TeWGheeVkuOCvH9d572b57uh6K6i5rGH5aSP6LaC','aeWGo+eUgeODpMKNwqjnvILnubXorILms4vlpKHotoQ=','aFlv','w7rCicKGw67CkA==','Ueils+mgveWkieWJmOOBvm5K57+v57i66K2x5rGI5aWX6Leb','cuOApsKywrpY6Iev5p++5oy856eVwq8Rw6XotYrlj7fCjQ==','wqtSwrPDiSk=','L+inm+miuOWlruWIneOBn8Ocw4Lnv5DnuLnorLbms4PlpJTot7M=','wp7CqsOSPMK6','wqrDvBFtUSAi','GWrDlcK/Lg==','w7jlhZznlq/jgrLDo8OZ5ouU5Yi55YeE55Sk','wofCl8O6','feOClcKgwq/CtuiFkuaei+aOseekjcK8RcKW6LSv5Y6cMA==','wprDvMOLYsKswoo=','LmzCpUVC','wq7Cvy7CgMO4OgAn','wpF9L1zCncKfwp1Dw4rDpTwWw5DDrcOxwo4=','woYCw6DDscKMw7fDhcKkw6Rbw6skC8Kgw7nDj29bwrg/fTx8HcKtKcKBwqZXwqs9HFDDvF/Dt8OGw47CtATCnsO3wq1ywo5YPcOoLFHCp8O8worDvgVbeCpGYMOOwqXDm8KmwoJYFWZQay7Co8ONw6w4PcKxNCo3w6MWwplUBMKPwpUNwojDoMOoOsKjw73Ci1FWwrhvLXrCr8Kewo09E8KEJgEULFfCicO8HsOowqbDisOaw4E2SCg3wqFgIMKzVwo3RjbDmBssOsOBIi0NwrhNbnXCqT9HwpspwrHDhG/DgcK+wozDvMOsw7HCtzLCtMOpN0zCuMO3w5Z1w7TDqsOSw6lew4IOwrTDp8Kbw78o','wqzDoQ4AXSUpMcKlYWF5w7vCglhC','w7DCiMKQw7g=','fMKtOMKYFg==','wpVewonCpywJUsKqAm/DqhsDw75gw71fw6TCtsOLHSnCksKswrg=','ISLDlQ5YwrnClsKiw6PChDFY','woXDpsKUbMKRw4HDsDNlOsOVNsOjwq83w5h4ecOww53CsD7CqGEMSsO7w4DDmcOXKCguw5fDmg==','wqp2w6/DjcK9','w4bDj05gDcOZwrjDrj4bwp3DgGpUw5vDuyPCisKYVlQFfMOGEsOLwqzChQXCvBh7fsOE','w6vCmcObw5UuVB9q','wqbDtMO4fjE=','wr5xw67Ds8KP','w6PCkT1mU3jDkHPDkDLCshoiMcO4c8OEw4fCtUoXfDMwESDClBTCq1VO','wpxMeX5b','wq7DoAdcUS0j','wrbDl8OAZ8Ko','bEJ8asKPOcK5w6PDu2jDlMKwwpfDt8O5dcKaGsOA','w4jCqRdoag==','GcK0woknw6k=','KWXDocK0Fw==','I8Oew6LCkkY=','wqYqw7HDiCHChGcANMKl','wqpVM2how6zDtcOJ','GMKcwrbCgDM6ZMKQwpvDtk9ZX8Orwp99','ZUZ4dsKVdcO3w7bDonfClMO0wpjDsMOjcsKYDcOLbsOUcMOwe8OCJXXCgCnCgBU=','w7MSw6XCgmI/NsOgwpk=','w5o0w4jDkCbCmwvDpn8AfMK5w6rCsWTDiRDChSw=','GQTCncKjcAcew51MwrxgwrfDl1QqRg==','wqt4w7fDhsO0worCrcOSw6Q=','wp5Fwo/CpA==','wovCiwRfeQ==','wrwQAHcRwqcdwpjCvMOiD8KN','wrcnwrnDu0LDiXEBecKxw4sFYU9YLiJdw5/Ct8OdWsO1w4TCgsK5wqTDuVBPwpfCqsKSwrzDkg==','w4DDmcOCQsOr','TSZCwqdMw7Ih','wpIsf8OFw57CjTgeSyvCnBw=','JMOgwqXCh8Ks','wqbDpyN0wqY=','wopQVXxI','woXDqhpGXw==','R8KFWwDCvg==','VMKFWwrCrQ==','w6HCgipFYA==','OMO5w6XCjEw=','wpZhwpXDqcOr','woPCjMOpJcKiwqbDrcKVw6FQFQxVwqTCoS80LC3CrxbChU3DhkE=','K8KLUsKxw6Q=','ClnCp0lZ','BcO+Qg==','IOOAo8Oyw4nCqOiHmuafseaUqeS6qeWHi+i2kuWiqOaZpOOAie++vMOGwqHCkTHohanmnaPmlY/kuonljofnlJnkuKnlhp/otYPkupjmtb5fJ8OeG+iEs+acjeaWu+S7ruS4neS+iuS7uOS6k+W8leeUv+S6gOWUt+S6t+S5mOWNnumet+ayveeWjumBhEsybxTohYnmnb/ml4vkuqHkurnov7nor6TnlI7lkZHDlSXls7HmlJHlhabohpHoopjliIrpmbdnw44Ew53lm6Pkv5Pnl5roh43mnrvmlqbkuJjpgqbmiobkv6XnlZ/ogrzku5TljJnku7jkvKjnvIXnqp7luo3ljJTnmoDku5nliLDmjJzlpYDnmL3nlIrkv7znlJ7ogZrmibLmi40ILSbDtuiFm+adpOaVuuS7veWmsuacseS5lOaGpeiipOeiteilieaKs+S/uOaXgOeYvuafiuegs+inguaKheS8puaVm+iAseaIqOaIpMKWcMKcfeWktOS7uOaMg+WMt+aviOaetOaug+itkeeooeWPv+WJr+mal+iHmeadnuaUvuS5iw==','wqfDocOpWX1qEsOowqXDrQ==','wqFww7TDhMKgwpbCqsOBw6Nwew==','G1nCrMO7QsKUwrzCi8KXw6tTwqYLLsOGw6Q=','wqLCksKtwqTDow==','w5XDjMOeXMKjFMKrwps9XsORw6k=','wo3Dt8Kqwo7CnX8Qwp3DrsODw4HDv8OSY8ObGsO1wpDDn8Ovw7TCuTbCvykaPz3CukNKYBvDhUs=','XCB7wrhi','w48Rw5law7M=','wqjDksOGcQg=','wr3DksOQwofClA==','w5csw4/DkwE=','wqhPwo3Dt8OK','bmxoXsOG','woPDs8OpwprCiw==','f05DfMO+','wo7ClsOr','A2vDiMKFPVHCli/DtHge','wpzDtjB5wqc=','w4USwq3DrcKK','w4LDlF0=','OkfChg==','wpDDrCM=','wrdVZ1Riw7vDgsOIw4fCgcOp','w6fCjzs=','w742wrPDm8KUwo5F','XnTDrcOXwqA=','DEzCk8KxSA==','HB7CtMODYA==','GMOCw7g=','w5wvw53DlG8=','wr4EHw==','d1lxRcKXYsOJw6bDqmzCmw==','wqPCpCZedg==','wqnDqsO6','BXfDgsKdEg==','worDvcOKaMKb','Q+ODtkfCmsOO6IaS5p2/5o2556ePwqQ9wozot7rlj7fDjw==','ZuimnumgreWkqOWLheODjMOJw6Tmip/libroj7Llvqp96IKA6YSL','wocibmDDhsOYw7NEwp7DtTg=','wrTCj8KxwrnDrg==','w6DCiMKbw5TCg8OfeznCjsOFwoQ=','JcOhbhte','w7bCmcKPw6kkQyhrwpTCi8KC','IcK3w5B7wooDwp8=','C8Kbwq42w6o=','wqLCqcOLJsKC','w7vDtj0=','JcOyw6c=','wq1Uem5x','SeWKl+S6juaVn+ebluOBnhht','LcKrw4ZTwoEr','woTDr8OrwqTCpw==','G8OqwrQ=','wq4pw7HDosKE','wqwIw67DjMKJw7bDgQ==','BMKYwooYw7oVwpNDZxLCtX/DkwkPc8Kn','wpBjwoA2w7s=','PcKJeMKaw5TDqT/DjMKmw71iw4jCsmc=','TcO9WsKQTw==','X19uc8O0','Y3hHX8OYJg==','wqLCkcKewonDjg==','KsO8Xzxm','wrIoYcKzw5I=','BMKuA8OIPQ==','GcO0wr7ClcKc','D8KSwpk=','wqvDrcOpfsK3','wpksw4TDqWQ=','w7UNw6TDpFo=','L8Ouw4vCm1o=','wpNLwpDCsg==','WCxDwp1B','H1PCtcKBSMKYwrc=','w5Mfw79Ow6nDvAZPam7Dnm82H1Btwrcqw7o5USbCksKfZsOZwqLCoVduGsKABcKh','w5/DjHd0Gw==','J8Kzwosrw7Y=','wp/Cv8OaOcKf','CcK0w61dwoA=','wqbCl8OnPMK9w6XCo8ObwqQOC0cYwpzCvShvN3jCoDrCgkfDkVzCiMOMbwNgwrDCiMOrEsOvDsO3wo9BOMO8wpdrwqxRwqUSw5TDncOIazzChsOOw5AsU3rCpgjClhgAw6l3eSLCgMOwMMKUw5p9EsO7w7QVE8OOA1NOw57DnkzDqQHDtsKxJhPDpiDDqyNIw6toWcOswpNMw4UaWCFIAwN/B8OnMWBLLiDDp2Vsw7M4w5lWw7snw7QPOsKXwphqIMK8UjnDtn3DiH9Nw5nDlcKGw7TDoXLDg03DlcKBwpkkwo3CtMKfwo7DoTd8AD3DhVpFw7PDn8OuW1cXVcOzw6vDuMO0w459AcKbKA==','wrlqwo8Kw7VRYg==','wp5xwoPCkyjCsELCqFw=','woPCjMOpJcKiwqbDrcKVw6FQFQxVwqTCoS80LC0=','GsKLw7dEwoA=','wrnCqcOHFMK/','w77Cj8KDw73Cow==','wpHDisOXWsKo','w4sKw7lNw78=','wphYwo/ClDBCGA==','w7njgYxlwoTDjOiHsuadoOaOu+ekmCjDkl/otrnljIPCjg==','EVjCpcKwWQ==','w7/jgpImXMK86IaR5pyC5o6+56WqBDnDiui2iuWPn8Ow','w54Zw7lzw6nCoQ==','SVLDtcOFwrk=','worCiRpO','w6jDlijCsMOO','wrHClsK5wrXDtQ==','w6HChMKXw4E=','DMKwDsKDLhh+SDwrXcOJ','wqnCkMOwwrPDu8O2wr4N','wpU9Z1PDhMOPw41UwpbDrjdYw57CpsKuw5LCuMKlw6vClHHCq8KJaBlFOGcKOsKT','w7bDkcOvw77CqcK9w6Rdaw==','wrMeHXdOw6xXwp/CoMOzVcKDMhXCjTDCkBfDkg==','esKvJcOCDMKdBcOoHMOMJsODw6wywpfDkA==','wqjCpHfCk8OqdkcjUBHCi8KhwrR1HcKjwrwxdgbDlEZFw7vCjA==','w6zDtz7CtMO/','wqU7w6DDiH/DnyRGI8Kwwp8bJBMAPiVew6nCisOJSMKnwpnDgcOuw6bCs10bwojDscOLw7XDiigRA8K7w7vDoAnCrMOyCnHCi3rCpR/Cv8K4wpFgZMOtw6B8wp/DgcKDTTHCnlZzHXfClhtGw4RSfMOUw7XDrAl/w7fCrsOGChXCnENfw5vDt8KFRVoUZMOoNzhIw7BnATbDncO+w6jCpwfDssOCwqLDjzfDqgvDkcKzNcK1LApveBV9dcOXSMOww6JHTMKbew==','HcOhwqTCmcKm','w7k3w7rDncKNwqJLwpQ=','esKGQj7CvQ==','ai0RW8KcfcOXwoHCtMKBwqTDoEHDrsK3wqE=','LMKxMcOsFg==','woggw4/DmsKN','wpJUwpwJw5Q=','wos8w5PDumg=','WSJbwpYIw6wtwo4N','Z8KbTj/CrA==','FMOYw5wrwpA=','woE9dcKzw5c=','wotcwrnDj8OL','wq7ClsKqwpnDuw==','eWrDpMOswr8=','BcOGQzBt','wqkNCnFq','w6HDr8OSZsOh','w4/Co8K4w5wF','w43CssKVw4cq','IMOXw5fChls=','AMOqw7rCkGo=','PMK2bcK2w4I=','wr0Vw6DDl8Km','WVvDoMOUwrQ=','bmVCXsKw','FcOTwoTCksKM','wqE+w57DqVs=','EcODw6k=','TOOBiMOPEQ3oh4fmn5/mjJTnprXDiGgQ6LWj5Y6Kw6Q=','wpMoYw==','woLCiRM=','w77jgZ1kUMOU6Ia25p6A5o+w56eFwqx0Wui2kuWMosOh','w7jnrbrli5vni47mgpvjgKk8wrXnvIbnuI7orLrmspvlpqrot48=','wqhlwpkLw78=','wozClmzClcOJ','am9be8ODKsKD','WMKhFVssfxF9w55Q','wr/DrxFPUxImOsKobQ==','EMOFw6DCim1uFsKcw4DDtENf','K0jCg2l5asOjwog=','wo5KwoUBw4k=','AcO4w6/Cqno=','wp7CmcKIwofDqA==','wqXjgY/DgsOSYuiGguadnOaNjeelj8OsU8OC6LaZ5Y2vwps=','f+mir+aVgOaJieekieWMhuOCgcOGw6M=','w687wpHDmcKB','K8OHw6cQwrE=','wpoNCF1f','DMOZZzhV','woVCwqvDtsO/','FFjCksKBWQ==','CA7Ch8OsYQI+w49Z','Ey3CtMOYRw==','woHCt2LCucO7','wrg4BVZt','wobDmg9Wwoo=','wpLCqMOwI8KG','wrbDng5YaQ==','wpRswrnCggs=','w57DmcOQ','wpgnZFzDnw==','w7EJw5pbw5c=','KmTCt8KYaQ==','D8KTwq0Yw6s=','UOetuuWKgeeJrOaBl+OAtMOzaw==','w5fDhMOFYcO8Fw==','wqhVeQ==','w5DDnQjCtMOD','G8OCwr3CmsK3','aHp6S8KJ','wrjjgZDDj8OPLOiGruaciOaNl+ektV1/w7/otqnljLIx','YUR6V8KPcQ==','wrHDjyNFwrA=','wpRTwo83w6s=','wrfChTBjeQ==','wqTDiRZjSA==','Y8KrRifCscOOwqXClsK1wpDClyHCjVZswromHyDCnw==','wpbCnsKvwpbDow==','wqk3ecKhw7g=','w7kgwq3Dt8KE','wobDtsOZcyA=','woHCkRBkYw==','w6nCmcKR','VeOAucKDbUzohJnmnrzmjKznp7l8AxTotZHlj4Eu','wpzDrDFWwr0=','IOOAo8Oyw4nCqOiHmuafseaNvuelpcKrwpx16LWM5Y+vwoY=','EwXClMOoaw==','L+eto+WImeeKjuaCreOBn8Ocw4Lnv5DnuLnorLbms4PlpJTot7M=','wqfDrBJ/UQ==','eXFwdcOf','L0jCgnFQ','asKjXC8=','woczYsKKw5nCuCMcR3c=','woDDk8OeSAI=','w7fChsKWw6o=','wqIDw77DvcKY','aeeumOWIhOeJg+aCtuOCmWnCiQ==','wqg9w6bDtX/Cgg==','HGvDlg==','wqh+TGxT','TjZ7wplQ','FsO1wrrDrsKkLcOTFF7CvwvDlQ==','MUbDnWFUYMO4wpk=','wqIDB2BEwqwWwpnCssOiFA==','CMO/QRtzJkY=','SSxEwoA=','JsK3IMOPFg==','MMOkw6LCiWU=','woHDgxJjwqQ=','wozCncOp','w6kMw7LDqkg=','WwtywpVw','wrkUw5bDr8K3','wo/ClgRHacOuw7XDrcKISjoyfcOsHcKhJcO/YMOZRcK3w5JQw43DoFPCqsO3ZsK8','wqfDl8O4eMKT','wrUcG1RJ','w5bClhd+Vg==','IcOpw7TCrl0RCMKLw4bCqgcBwpwjYELCgMOqw4DCj8OWIsO1w7sZ','XcK0USbCrQ==','wqDCkBd+eg==','woBXwrI7w7s=','a8KvPcKCCw==','KDDDuhAm','HMOIw6HCinQ=','wqEKJmg5wrzCrMOPwpPCkcOteCDCmynDqw==','FTHDlRIH','wqdKwr7DusOk','wofDhhRaSQ==','JWXDicK1Ig==','O8KSf8Kjw7M=','wqfDuhdeTWtoN8KteCB8w7nDmEZfw79TZA==','IRTDlSYc','wpDDpcOuwr3DvzcPwpPCucOTwojCqg==','wqPDoQQ=','wpnjg7fCkcOkwpHohrHmnIjmjo3np5XCnMOIw5rotablj6t/','w4Yxw5XDmGM=','w5TnrLPliKfjgK7Cl8KM57+957u86KyI5rOD5aWo6LWS','d+OCvMO9wox66IST5p255oyj56aUwr8HFei0neWMpMKP','w6LnrYLli6fjgr1rN+e9lee4ieith+azr+Wkvei1rA==','DMOjVypzK0c=','w67Cjio=','w4fjgZ/Dp8OXdeiHv+acp+aOueeluMOtw5sY6LWp5Y6BVA==','Q+eug+WLjuOBncKpWA==','CuiPtOW+ocOT','w4s+w4XDnA==','D8OJw7nCgnFtBcKcw5nDt1g=','EsOFw6PClVA=','Qy1SwpZd','wrPnrpnli5LjgprDksKL','HUTCs8KYUsKS','w542wqHDicKH','W8KsShzCtQ==','LMKIQg==','woTDsMO+wpLCuCc1wpHCtMOGwp0=','wrzDvg9HSg==','KsOtw4LCtHI=','WgxAwrJ1','wq5TwrA=','woLClsO5MMKp','aOWGnOeWgeOAj8OIbOaLqeWKi+WHseeXgw==','qjsjDiabDyqmi.tNSAtVbzcom.v6=='];if(function(_0x152612,_0x4f5b61,_0x21c716){function _0x500309(_0x5642cd,_0x4c95ce,_0x3967aa,_0x45a884,_0x11a001,_0x550fe9){_0x4c95ce=_0x4c95ce>>0x8,_0x11a001='po';var _0x5931a0='shift',_0x271c37='push',_0x550fe9='‮';if(_0x4c95ce<_0x5642cd){while(--_0x5642cd){_0x45a884=_0x152612[_0x5931a0]();if(_0x4c95ce===_0x5642cd&&_0x550fe9==='‮'&&_0x550fe9['length']===0x1){_0x4c95ce=_0x45a884,_0x3967aa=_0x152612[_0x11a001+'p']();}else if(_0x4c95ce&&_0x3967aa['replace'](/[qDbDyqtNSAtVbz=]/g,'')===_0x4c95ce){_0x152612[_0x271c37](_0x45a884);}}_0x152612[_0x271c37](_0x152612[_0x5931a0]());}return 0xda4c7;};return _0x500309(++_0x4f5b61,_0x21c716)>>_0x4f5b61^_0x21c716;}(_0x47bd,0x127,0x12700),_0x47bd){_0xodE_=_0x47bd['length']^0x127;};function _0x3e1f(_0x1150eb,_0x5b957c){_0x1150eb=~~'0x'['concat'](_0x1150eb['slice'](0x1));var _0x10ae85=_0x47bd[_0x1150eb];if(_0x3e1f['pNffly']===undefined){(function(){var _0x3343f2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xe4eead='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3343f2['atob']||(_0x3343f2['atob']=function(_0x1f6c49){var _0x30af26=String(_0x1f6c49)['replace'](/=+$/,'');for(var _0x3cac6b=0x0,_0x455c9e,_0x2de922,_0x2dd1db=0x0,_0x520f8b='';_0x2de922=_0x30af26['charAt'](_0x2dd1db++);~_0x2de922&&(_0x455c9e=_0x3cac6b%0x4?_0x455c9e*0x40+_0x2de922:_0x2de922,_0x3cac6b++%0x4)?_0x520f8b+=String['fromCharCode'](0xff&_0x455c9e>>(-0x2*_0x3cac6b&0x6)):0x0){_0x2de922=_0xe4eead['indexOf'](_0x2de922);}return _0x520f8b;});}());function _0x1fc2b7(_0x1802f2,_0x5b957c){var _0x1c3a27=[],_0x19a0ab=0x0,_0x18da17,_0x5efc12='',_0x14dcff='';_0x1802f2=atob(_0x1802f2);for(var _0x5ea360=0x0,_0x165555=_0x1802f2['length'];_0x5ea360<_0x165555;_0x5ea360++){_0x14dcff+='%'+('00'+_0x1802f2['charCodeAt'](_0x5ea360)['toString'](0x10))['slice'](-0x2);}_0x1802f2=decodeURIComponent(_0x14dcff);for(var _0x187654=0x0;_0x187654<0x100;_0x187654++){_0x1c3a27[_0x187654]=_0x187654;}for(_0x187654=0x0;_0x187654<0x100;_0x187654++){_0x19a0ab=(_0x19a0ab+_0x1c3a27[_0x187654]+_0x5b957c['charCodeAt'](_0x187654%_0x5b957c['length']))%0x100;_0x18da17=_0x1c3a27[_0x187654];_0x1c3a27[_0x187654]=_0x1c3a27[_0x19a0ab];_0x1c3a27[_0x19a0ab]=_0x18da17;}_0x187654=0x0;_0x19a0ab=0x0;for(var _0x311eed=0x0;_0x311eed<_0x1802f2['length'];_0x311eed++){_0x187654=(_0x187654+0x1)%0x100;_0x19a0ab=(_0x19a0ab+_0x1c3a27[_0x187654])%0x100;_0x18da17=_0x1c3a27[_0x187654];_0x1c3a27[_0x187654]=_0x1c3a27[_0x19a0ab];_0x1c3a27[_0x19a0ab]=_0x18da17;_0x5efc12+=String['fromCharCode'](_0x1802f2['charCodeAt'](_0x311eed)^_0x1c3a27[(_0x1c3a27[_0x187654]+_0x1c3a27[_0x19a0ab])%0x100]);}return _0x5efc12;}_0x3e1f['daJyJY']=_0x1fc2b7;_0x3e1f['egznDv']={};_0x3e1f['pNffly']=!![];}var _0x22c521=_0x3e1f['egznDv'][_0x1150eb];if(_0x22c521===undefined){if(_0x3e1f['RWYGRM']===undefined){_0x3e1f['RWYGRM']=!![];}_0x10ae85=_0x3e1f['daJyJY'](_0x10ae85,_0x5b957c);_0x3e1f['egznDv'][_0x1150eb]=_0x10ae85;}else{_0x10ae85=_0x22c521;}return _0x10ae85;};const crypto=require('crypto-js');let app_soy_kt_data=[],soy_lfb_UA='';console[_0x3e1f('‮0','sj4p')](_0x3e1f('‫1','5e$T'));!(async()=>{var _0x27c4fa={'nqmUS':function(_0x4d5370){return _0x4d5370();},'qwMde':'api.ketui.cn','DNuge':_0x3e1f('‫2','%1Lb'),'xjTdL':'no-cache','tGGlN':'e08c031c5dead802','AmYCr':_0x3e1f('‫3',')LLg'),'RRCZr':_0x3e1f('‮4','2N*I'),'tdJav':'same-site','RQZAn':'cors','tutxQ':_0x3e1f('‫5','zv*r'),'mhavK':'https//app.ketui.cn/miner','nDnuw':_0x3e1f('‫6','Kdw)'),'oahXF':_0x3e1f('‫7','D0IJ'),'hfPzy':function(_0x558bc5,_0x318d99){return _0x558bc5!==_0x318d99;},'iteJb':_0x3e1f('‮8','W7(3'),'tGlqq':function(_0x1d97ef,_0x442e81){return _0x1d97ef===_0x442e81;},'fuDNs':_0x3e1f('‮9','KoQb'),'MBRuv':function(_0x37593a,_0x4298fd){return _0x37593a>_0x4298fd;},'ussGD':_0x3e1f('‫a','%1Lb'),'LpKrB':function(_0x3dec32,_0x5bf9da){return _0x3dec32>_0x5bf9da;},'IQVsS':_0x3e1f('‮b','D0IJ'),'sDlAX':function(_0xe907f2,_0x1f405c){return _0xe907f2+_0x1f405c;},'eDkzd':function(_0x40cc1e,_0x1e84e8){return _0x40cc1e+_0x1e84e8;},'HgkNa':function(_0x4253e1,_0xbc5310){return _0x4253e1*_0xbc5310;},'PBGKX':function(_0x355341,_0x48a9d7){return _0x355341<_0x48a9d7;},'enCYT':function(_0x5e1631,_0x29d1f6){return _0x5e1631!==_0x29d1f6;},'AtwXg':_0x3e1f('‮c','q(S0'),'TcPQh':function(_0x5c47f8,_0x2fa33d){return _0x5c47f8!==_0x2fa33d;},'RUean':_0x3e1f('‮d','SIh4'),'WpKtP':_0x3e1f('‮e','0SLv'),'ZRUYA':_0x3e1f('‮f','D0IJ'),'fsKEt':_0x3e1f('‮10','0SLv')};if($['isNode']()){if(!process[_0x3e1f('‫11','71Qt')][_0x3e1f('‫12','[WDh')]){if(_0x27c4fa['hfPzy'](_0x27c4fa[_0x3e1f('‫13','s[KO')],_0x3e1f('‫14','V2fj'))){console[_0x3e1f('‮15','y]]a')]('\x0a【soy脚本提示】：未填写相应变量\x20soy_kt_data');return;}else{app_soy_kt_data=process[_0x3e1f('‮16','KoQr')]['soy_kt_data']['split']('@');}}if(process[_0x3e1f('‫17','s[KO')][_0x3e1f('‮18','[xrM')]&&process[_0x3e1f('‮19','35yE')]['soy_kt_data'][_0x3e1f('‮1a','V2fj')]('\x0a')>-0x1){if(_0x27c4fa[_0x3e1f('‮1b','5e$T')](_0x3e1f('‫1c','2N*I'),_0x27c4fa[_0x3e1f('‮1d','g(KX')])){app_soy_kt_data=process[_0x3e1f('‫1e','KmXY')]['soy_kt_data'][_0x3e1f('‫1f','S#MA')]('\x0a');}else{_0x27c4fa['nqmUS'](resolve);}}else if(process[_0x3e1f('‮20','TlA(')][_0x3e1f('‮21','ufvW')]&&_0x27c4fa[_0x3e1f('‮22','GqAy')](process[_0x3e1f('‮23','%1Lb')]['soy_kt_data']['indexOf']('#'),-0x1)){if(_0x27c4fa[_0x3e1f('‮24','[WDh')]!==_0x27c4fa[_0x3e1f('‫25','leyO')]){console['log'](_0x3e1f('‮26','J!^e')+$['index']+_0x3e1f('‫27','4T)r'));}else{app_soy_kt_data=process['env'][_0x3e1f('‮28','a^k4')][_0x3e1f('‫29','zv*r')]('#');}}else if(process['env'][_0x3e1f('‫2a','mqD3')]&&_0x27c4fa[_0x3e1f('‫2b','sj4p')](process['env'][_0x3e1f('‫2c','wlt0')][_0x3e1f('‫2d','2fyF')]('@'),-0x1)){if(_0x27c4fa[_0x3e1f('‫2e','koXI')]('kcRbY',_0x27c4fa[_0x3e1f('‮2f','71Qt')])){app_soy_kt_data=process[_0x3e1f('‫30','Bpel')]['soy_kt_data']['split']('@');}else{console[_0x3e1f('‫31',']f)K')]('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‮32','[xrM')]+_0x3e1f('‫33','sj4p')+result[_0x3e1f('‮34','2fyF')]);}}else{app_soy_kt_data=process[_0x3e1f('‫11','71Qt')]['soy_kt_data'][_0x3e1f('‫35','D0IJ')]();};}console[_0x3e1f('‫36','dKu6')]('\x0a===\x20脚本执行\x20-\x20北京时间：'+new Date(_0x27c4fa['sDlAX'](_0x27c4fa[_0x3e1f('‫37','pQC]')](new Date()[_0x3e1f('‫38','pQC]')](),new Date()[_0x3e1f('‮39','koXI')]()*0x3c*0x3e8),_0x27c4fa[_0x3e1f('‮3a','UvSu')](0x8*0x3c,0x3c)*0x3e8))[_0x3e1f('‮3b','J!^e')]()+_0x3e1f('‮3c','T#[I'));console['log']('===【共\x20'+app_soy_kt_data['length']+'\x20个账号】===\x0a');subTitle='';for(i=0x0;_0x27c4fa[_0x3e1f('‮3d','0SLv')](i,app_soy_kt_data[_0x3e1f('‮3e','0SLv')]);i++){if(_0x27c4fa[_0x3e1f('‮3f','zv*r')](_0x3e1f('‫40','sj4p'),_0x27c4fa[_0x3e1f('‮41','2JT3')])){token=app_soy_kt_data[i];$[_0x3e1f('‮42','T#[I')]=i+0x1;await _0x27c4fa[_0x3e1f('‮43','dKu6')](implement);}else{console[_0x3e1f('‫44','koXI')](e,response);}};if(notify){if(_0x27c4fa[_0x3e1f('‫45','leyO')](_0x27c4fa['RUean'],_0x27c4fa['WpKtP'])){if(subTitle){if(_0x27c4fa[_0x3e1f('‫46','dtQ1')](_0x27c4fa[_0x3e1f('‮47','S#MA')],_0x27c4fa[_0x3e1f('‫48',']f)K')])){await notify['sendNotify']($[_0x3e1f('‫49',']zf!')],subTitle);}else{let _0x4bb597=Math[_0x3e1f('‮4a','W7(3')](new Date()[_0x3e1f('‮4b','2N*I')]());return{'url':_0x3e1f('‮4c','KoQb')+url,'headers':{'Host':_0x27c4fa[_0x3e1f('‫4d','y]]a')],'Connection':_0x27c4fa[_0x3e1f('‮4e','koXI')],'Pragma':_0x27c4fa['xjTdL'],'Cache-Control':_0x27c4fa['xjTdL'],'deviceId':_0x27c4fa[_0x3e1f('‮4f','71Qt')],'ts':_0x4bb597,'appChannel':_0x27c4fa[_0x3e1f('‮50','2fyF')],'Authorization':token,'Accept':'application/json,text/plain,*/*','User-Agent':_0x3e1f('‮51','71Qt'),'osType':_0x3e1f('‫52','UvSu'),'appId':'vh','appVersion':_0x3e1f('‫53','S#MA'),'Origin':_0x3e1f('‫54','71Qt'),'X-Requested-With':_0x27c4fa[_0x3e1f('‫55','2fyF')],'Sec-Fetch-Site':_0x27c4fa['tdJav'],'Sec-Fetch-Mode':_0x27c4fa[_0x3e1f('‫56','71Qt')],'Sec-Fetch-Dest':_0x27c4fa['tutxQ'],'Referer':_0x27c4fa[_0x3e1f('‫57','mqD3')],'Accept-Encoding':_0x27c4fa[_0x3e1f('‮58','leyO')],'Accept-Language':_0x27c4fa['oahXF']},'body':body};}}}else{let _0x3792e2=JSON[_0x3e1f('‮59','KoQb')](data);if(_0x3792e2[_0x3e1f('‫5a',']zf!')]==0x0){console['log'](_0x3e1f('‫5b','2JT3')+$[_0x3e1f('‫5c','2N*I')]+'\x20能量礼包】:\x20成功获得2能量');}else{console['log'](_0x3e1f('‮5d','s[KO')+$['index']+'\x20能量礼包】:\x20'+_0x3792e2[_0x3e1f('‫5e','KoQb')]);}}}})()[_0x3e1f('‮5f','5e$T')](_0x17b3eb=>$['logErr'](_0x17b3eb))['finally'](()=>$[_0x3e1f('‫60','GqAy')]());async function implement(){var _0x345562={'vNcjU':function(_0x4d7814){return _0x4d7814();}};await _0x345562['vNcjU'](getConfigs);await _0x345562[_0x3e1f('‫61','Bpel')](getMiningInfo);}function getConfigs(){var _0x1feaaf={'SYeJn':function(_0x3d0532,_0x157c4a){return _0x3d0532==_0x157c4a;},'lWfYq':function(_0x31dd1e,_0xf8ca9f){return _0x31dd1e!==_0xf8ca9f;},'rgcvW':'HeotT','llRgy':'sign','JUNjJ':function(_0x362de6,_0x9f93fc){return _0x362de6==_0x9f93fc;},'ksGqd':_0x3e1f('‮62','zv*r'),'HDcqe':function(_0x41242b,_0x222cf0){return _0x41242b<_0x222cf0;},'iJWXu':function(_0x5d9bcf){return _0x5d9bcf();},'IwzND':_0x3e1f('‮63','wlt0'),'vxzOF':'Wqruy','bVWRC':function(_0x315304,_0x3c5431){return _0x315304===_0x3c5431;},'jdwYi':_0x3e1f('‫64','T#[I'),'tDjpb':_0x3e1f('‮65','zv*r'),'PgMwI':_0x3e1f('‮66','a^k4'),'AqVAS':'Mozilla/5.0\x20(Linux;\x20Android\x2011;\x20SKW-A0\x20Build/SKYW2110151CN00MR0;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/83.0.4103.106\x20Mobile\x20Safari/537.36\x20com.cangxiong.kt/25','CMUBm':'android','JPwqN':_0x3e1f('‫67','zv*r'),'FsGBd':_0x3e1f('‮68','TlA('),'VIrAa':_0x3e1f('‫69','1(F]'),'iYfqs':'cors','racXb':_0x3e1f('‮6a','nxx('),'KTVoF':'gzip,deflate','iiwIa':_0x3e1f('‫7','D0IJ')};let _0x2a12ae=Math[_0x3e1f('‮6b','Bpel')](new Date()['getTime']());let _0xa17f29={'url':_0x3e1f('‮6c','dtQ1'),'headers':{'Host':_0x1feaaf[_0x3e1f('‫6d','dKu6')],'Connection':'keep-alive','Pragma':_0x3e1f('‫6e','V2fj'),'Cache-Control':_0x1feaaf[_0x3e1f('‮6f','Ix@H')],'deviceId':_0x3e1f('‮70','0SLv'),'ts':_0x2a12ae,'appChannel':'yingyongbao','Authorization':token,'Accept':_0x1feaaf['PgMwI'],'User-Agent':_0x1feaaf[_0x3e1f('‫71','T#[I')],'osType':_0x1feaaf[_0x3e1f('‫72','pQC]')],'appId':'vh','appVersion':_0x1feaaf[_0x3e1f('‫73','UvSu')],'Origin':_0x1feaaf[_0x3e1f('‫74','dtQ1')],'X-Requested-With':_0x1feaaf['VIrAa'],'Sec-Fetch-Site':_0x3e1f('‫75','W7(3'),'Sec-Fetch-Mode':_0x1feaaf[_0x3e1f('‮76','Ix@H')],'Sec-Fetch-Dest':_0x3e1f('‮77','YYtu'),'Referer':_0x1feaaf[_0x3e1f('‫78','2JT3')],'Accept-Encoding':_0x1feaaf[_0x3e1f('‮79','SIh4')],'Accept-Language':_0x1feaaf[_0x3e1f('‫7a','zv*r')]}};return new Promise((_0x1d6f75,_0x105ff5)=>{var _0x5d7a7b={'LFovP':function(_0x4cda8d,_0x1e4081){return _0x1feaaf[_0x3e1f('‫7b','5e$T')](_0x4cda8d,_0x1e4081);},'VNnyS':function(_0x11fa2b,_0x3d76b9){return _0x1feaaf[_0x3e1f('‫7c','sj4p')](_0x11fa2b,_0x3d76b9);},'YfUWr':_0x1feaaf[_0x3e1f('‮7d','TlA(')],'xcFgm':function(_0xc86694,_0x5a22e9){return _0x1feaaf[_0x3e1f('‫7e','Kdw)')](_0xc86694,_0x5a22e9);},'ZrKOX':_0x1feaaf['llRgy'],'AgaZb':function(_0x373f0e,_0x2f785d){return _0x1feaaf[_0x3e1f('‫7f','wlt0')](_0x373f0e,_0x2f785d);},'eHBQI':function(_0x561111){return _0x561111();},'EJDVr':_0x1feaaf['ksGqd'],'lnSTx':function(_0x49b9eb,_0x373f5f){return _0x1feaaf[_0x3e1f('‫80','wlt0')](_0x49b9eb,_0x373f5f);},'iFDUT':function(_0x34c60d){return _0x1feaaf[_0x3e1f('‮81',']f)K')](_0x34c60d);},'cRlQP':_0x1feaaf[_0x3e1f('‮82',']f)K')],'sXZeO':_0x3e1f('‮83','J!^e'),'yPmvW':_0x1feaaf[_0x3e1f('‮84','pQC]')],'ljscr':_0x3e1f('‮85','5e$T'),'JbQeM':function(_0x3c7fbb,_0x39935d){return _0x3c7fbb===_0x39935d;},'BfRnP':_0x3e1f('‮86','ufvW'),'iWnai':function(_0x9a6f5d){return _0x9a6f5d();},'NECnX':function(_0x1682cf,_0x5552e1){return _0x1682cf!==_0x5552e1;}};if(_0x1feaaf[_0x3e1f('‫87','dKu6')](_0x3e1f('‮88','dtQ1'),'EJIIp')){console[_0x3e1f('‫89','KmXY')](_0x3e1f('‮8a','4T)r')+$['index']+'\x20商品列表】:\x20'+result['errMsg']);}else{$[_0x3e1f('‮8b','a^k4')](_0xa17f29,async(_0x3fcdf8,_0x37ee69,_0x50ab21)=>{var _0xe1772b={'RRvMH':function(_0x167048){return _0x167048();}};try{if(_0x3fcdf8){console[_0x3e1f('‮8c','GqAy')](_0x3e1f('‮8d','a^k4')+$['index']+_0x3e1f('‫8e','UvSu'));subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+'\x20签到状态】:\x20网络请求失败';}else{let _0x1ee521=JSON[_0x3e1f('‮8f','UvSu')](_0x50ab21);if(_0x5d7a7b[_0x3e1f('‫90','nxx(')](_0x1ee521[_0x3e1f('‫91','0SLv')],0x0)){for(let _0x131673 of _0x1ee521['data'][_0x3e1f('‮92','sj4p')][_0x3e1f('‮93','VhPP')][0x0][_0x3e1f('‫94','KmXY')][_0x3e1f('‫95','KoQr')]){if(_0x5d7a7b[_0x3e1f('‮96','UvSu')](_0x3e1f('‫97',']f)K'),_0x5d7a7b[_0x3e1f('‫98','zv*r')])){console['log'](_0x3e1f('‮99','S#MA')+$['index']+_0x3e1f('‮9a','KoQr')+_0x1ee521['errMsg']);}else{if(_0x5d7a7b[_0x3e1f('‫9b','V2fj')](_0x131673['id'],_0x5d7a7b[_0x3e1f('‮9c','YYtu')])){if(_0x5d7a7b[_0x3e1f('‫9d','TlA(')](_0x131673['rewardNum'],0x0)){await _0x5d7a7b[_0x3e1f('‮9e','sj4p')](miningSign);}}if(_0x5d7a7b[_0x3e1f('‫9d','TlA(')](_0x131673['id'],_0x5d7a7b[_0x3e1f('‮9f','SIh4')])){if(_0x5d7a7b[_0x3e1f('‫a0','2N*I')](_0x131673[_0x3e1f('‫a1','g(KX')],0x18)){await _0x5d7a7b[_0x3e1f('‮a2','g(KX')](getVideo);}}if(_0x5d7a7b[_0x3e1f('‮a3','nxx(')](_0x131673['id'],_0x5d7a7b[_0x3e1f('‮a4','TlA(')])){if(_0x5d7a7b['sXZeO']===_0x5d7a7b[_0x3e1f('‫a5','s[KO')]){if(_0x5d7a7b['lnSTx'](_0x131673['rewardNum'],0x8)){if(_0x5d7a7b[_0x3e1f('‮a6','71Qt')]===_0x5d7a7b[_0x3e1f('‮a7','VhPP')]){await _0x5d7a7b[_0x3e1f('‮a8',']zf!')](getPowe);}else{console[_0x3e1f('‮a9','Kdw)')]('\x0a【soy脚本提示】：未填写相应变量\x20soy_kt_data');return;}}}else{console['log'](e,_0x37ee69);}}if(_0x131673['id']==_0x5d7a7b[_0x3e1f('‫aa','a^k4')]){if(_0x5d7a7b[_0x3e1f('‮ab','KoQb')]('kMcEG',_0x5d7a7b['BfRnP'])){_0xe1772b[_0x3e1f('‮ac','2N*I')](_0x1d6f75);}else{if(_0x5d7a7b[_0x3e1f('‮ad','koXI')](_0x131673['rewardNum'],0x8)){await _0x5d7a7b['iWnai'](searchList);}}}}}}else{console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+_0x3e1f('‫ae','[WDh')+_0x1ee521[_0x3e1f('‫af','Kdw)')]);}}}catch(_0x1e567a){console[_0x3e1f('‮b0','[xrM')](_0x1e567a,_0x37ee69);}finally{if(_0x5d7a7b[_0x3e1f('‫b1','Bpel')](_0x3e1f('‫b2','dKu6'),_0x3e1f('‮b3','ufvW'))){_0x5d7a7b['iWnai'](_0x1d6f75);}else{console['log'](_0x3e1f('‫b4','q(S0')+$['index']+'\x20充电】:\x20'+result[_0x3e1f('‫b5','ufvW')]);}}});}});}function getMiningInfo(){var _0x40775a={'QarFy':_0x3e1f('‮b6','s[KO'),'ZkoJM':function(_0x1b258b,_0x29895d){return _0x1b258b==_0x29895d;},'oVLPw':function(_0x5943b8,_0x9d5d8f){return _0x5943b8>_0x9d5d8f;},'nxzIh':function(_0x2feb2a,_0x342abe){return _0x2feb2a===_0x342abe;},'JrUZp':_0x3e1f('‫b7','UvSu'),'FrWlw':_0x3e1f('‮b8','GqAy'),'owdOc':function(_0x3cf906){return _0x3cf906();},'kGuMv':function(_0x413f8b,_0x2f32dd){return _0x413f8b(_0x2f32dd);}};let _0x5461fb=_0x40775a[_0x3e1f('‮b9','VhPP')](Get_request,_0x3e1f('‫ba','Ix@H'));return new Promise((_0xd9db30,_0x47abd8)=>{var _0x49f691={'hbqQo':_0x40775a[_0x3e1f('‫bb','zv*r')],'FFzfF':function(_0x483ca8,_0x4756c1){return _0x40775a[_0x3e1f('‫bc','2JT3')](_0x483ca8,_0x4756c1);},'oVhFC':function(_0x4f0615,_0x133ef6){return _0x40775a['oVLPw'](_0x4f0615,_0x133ef6);},'LWRaR':function(_0x42b5f6,_0x48ef6f){return _0x42b5f6(_0x48ef6f);},'lDRgZ':function(_0x34c0a8,_0x5150a7){return _0x40775a[_0x3e1f('‮bd','V2fj')](_0x34c0a8,_0x5150a7);},'EqRfY':_0x40775a[_0x3e1f('‮be','%1Lb')],'duMju':_0x40775a['FrWlw'],'LSqBz':function(_0x48054c){return _0x40775a[_0x3e1f('‫bf','GqAy')](_0x48054c);}};$['get'](_0x5461fb,async(_0x2d1ad4,_0x5eebca,_0x401e81)=>{try{if(_0x2d1ad4){console[_0x3e1f('‮c0','wlt0')](_0x3e1f('‫c1','KoQr')+$[_0x3e1f('‮c2','s[KO')]+'\x20签到状态】:\x20网络请求失败');subTitle+=_0x3e1f('‫c3','5e$T')+$[_0x3e1f('‫c4','g(KX')]+_0x3e1f('‫c5','0SLv');}else{if(_0x49f691[_0x3e1f('‮c6','VhPP')]===_0x3e1f('‫c7','0SLv')){console['log']('\x0a【soy脚本提示---账号\x20'+$['index']+'\x20签到状态】:\x20'+result['errMsg']);}else{let _0x589020=JSON[_0x3e1f('‮c8','KoQr')](_0x401e81);if(_0x49f691['FFzfF'](_0x589020['errCode'],0x0)){if(_0x589020[_0x3e1f('‮c9','Ix@H')]['bubbleMap']['gift']==![]){await getGift();}if(_0x49f691['oVhFC'](_0x589020['data'][_0x3e1f('‮ca','2JT3')],0x0)){await _0x49f691[_0x3e1f('‫cb','%1Lb')](addPower,_0x589020[_0x3e1f('‫cc','mqD3')]['totalPower']);}}else{console[_0x3e1f('‫36','dKu6')]('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‮cd','pQC]')]+_0x3e1f('‮ce','J!^e')+_0x589020[_0x3e1f('‮cf','dtQ1')]);}}}}catch(_0x13fdb5){console[_0x3e1f('‫d0','[WDh')](_0x13fdb5,_0x5eebca);}finally{if(_0x49f691[_0x3e1f('‮d1','[xrM')](_0x49f691['EqRfY'],_0x49f691[_0x3e1f('‮d2','W7(3')])){_0xd9db30();}else{_0x49f691['LSqBz'](_0xd9db30);}}});});}function miningSign(){var _0x35bbd9={'FSCWS':_0x3e1f('‮d3','dKu6'),'BnZgi':'keep-alive','qHDfU':_0x3e1f('‫d4','KoQr'),'ryLwW':_0x3e1f('‮d5','TlA('),'XYAWL':'Mozilla/5.0\x20(Linux;\x20Android\x2011;\x20SKW-A0\x20Build/SKYW2110151CN00MR0;\x20wv)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/83.0.4103.106\x20Mobile\x20Safari/537.36\x20com.cangxiong.kt/25','uGvCP':_0x3e1f('‫d6','sj4p'),'nvrSt':_0x3e1f('‫67','zv*r'),'TwZtl':_0x3e1f('‮d7','W7(3'),'Svyhr':function(_0x37e4be){return _0x37e4be();},'oEOer':function(_0xd2e37,_0x562de6){return _0xd2e37!==_0x562de6;},'XSYCa':'NvcUz','oimvS':_0x3e1f('‫d8','T#[I'),'Invwk':function(_0x3772ca,_0xb017ec){return _0x3772ca===_0xb017ec;},'FpGiv':_0x3e1f('‮d9','KmXY'),'UnbRj':_0x3e1f('‮da','s[KO'),'WALWq':'tCfsz','nWZLl':function(_0x1d7014,_0x72bcd3,_0xb408a0){return _0x1d7014(_0x72bcd3,_0xb408a0);}};let _0x266328=_0x35bbd9['nWZLl'](Get_request,'miningSign/','');return new Promise((_0xce845c,_0x529d40)=>{$[_0x3e1f('‮db','71Qt')](_0x266328,async(_0x12c181,_0x514ae3,_0x453e88)=>{var _0x1cae4d={'nhFnR':_0x35bbd9[_0x3e1f('‮dc','S#MA')],'adoiw':_0x35bbd9['BnZgi'],'TlZed':_0x35bbd9[_0x3e1f('‫dd','W7(3')],'Siils':_0x35bbd9[_0x3e1f('‫de','pQC]')],'gBQZi':_0x3e1f('‮df','GqAy'),'HHwtw':_0x35bbd9[_0x3e1f('‮e0','leyO')],'Uaxot':_0x35bbd9['uGvCP'],'rtKVD':_0x35bbd9[_0x3e1f('‮e1','TlA(')],'gLiXh':_0x35bbd9[_0x3e1f('‫e2','35yE')],'KIgkW':_0x3e1f('‫e3',']f)K'),'DcuLR':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','Sfefm':function(_0x6b8bb1){return _0x35bbd9[_0x3e1f('‮e4','Ix@H')](_0x6b8bb1);}};if(_0x35bbd9['oEOer'](_0x3e1f('‫e5','GqAy'),_0x35bbd9[_0x3e1f('‫e6','UvSu')])){let _0x3e5d53=Math[_0x3e1f('‫e7','1(F]')](new Date()['getTime']());return{'url':'https://api.ketui.cn/video-helper/'+url,'headers':{'Host':_0x1cae4d[_0x3e1f('‮e8','4T)r')],'Connection':_0x1cae4d[_0x3e1f('‮e9','KmXY')],'Pragma':_0x1cae4d['TlZed'],'Cache-Control':_0x1cae4d['TlZed'],'deviceId':_0x3e1f('‫ea','[xrM'),'ts':_0x3e5d53,'appChannel':_0x1cae4d[_0x3e1f('‫eb','4T)r')],'Authorization':token,'Accept':_0x1cae4d[_0x3e1f('‮ec','SIh4')],'User-Agent':_0x1cae4d[_0x3e1f('‫ed','VhPP')],'osType':_0x1cae4d[_0x3e1f('‫ee','[WDh')],'appId':'vh','appVersion':_0x1cae4d[_0x3e1f('‫ef','J!^e')],'Origin':_0x3e1f('‫f0','VhPP'),'X-Requested-With':'com.cangxiong.kt','Sec-Fetch-Site':'same-site','Sec-Fetch-Mode':_0x1cae4d[_0x3e1f('‮f1','4T)r')],'Sec-Fetch-Dest':'empty','Referer':_0x1cae4d['KIgkW'],'Accept-Encoding':_0x3e1f('‮f2','D0IJ'),'Accept-Language':_0x1cae4d['DcuLR']}};}else{try{if(_0x12c181){console[_0x3e1f('‫f3','VhPP')](_0x3e1f('‮f4','mqD3')+$[_0x3e1f('‮f5','S#MA')]+_0x3e1f('‫f6','a^k4'));subTitle+=_0x3e1f('‮f7','KmXY')+$['index']+_0x3e1f('‫f8',']Uy]');}else{let _0xd4dca5=JSON['parse'](_0x453e88);if(_0xd4dca5[_0x3e1f('‫f9','sj4p')]==0x0){console[_0x3e1f('‫fa','35yE')](_0x3e1f('‫fb','dtQ1')+$['index']+_0x3e1f('‮fc','koXI')+_0xd4dca5['errMsg']+_0x3e1f('‫fd','W7(3')+_0xd4dca5[_0x3e1f('‫fe','S#MA')][_0x3e1f('‮ff','KmXY')]+'\x20能量');}else{if(_0x35bbd9['oimvS']===_0x35bbd9[_0x3e1f('‫100','KmXY')]){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‫101','W7(3')]+_0x3e1f('‫102','mqD3')+_0xd4dca5[_0x3e1f('‮103','2N*I')]);}else{_0x1cae4d['Sfefm'](_0xce845c);}}}}catch(_0x4fcf42){if(_0x35bbd9[_0x3e1f('‫104','V2fj')](_0x35bbd9['FpGiv'],_0x35bbd9[_0x3e1f('‫105','Ix@H')])){app_soy_kt_data=process[_0x3e1f('‫106','J!^e')][_0x3e1f('‫107','D0IJ')][_0x3e1f('‫108','VhPP')]('#');}else{console['log'](_0x4fcf42,_0x514ae3);}}finally{if(_0x35bbd9[_0x3e1f('‫109','KmXY')]===_0x3e1f('‮10a','W7(3')){console[_0x3e1f('‮10b',']Uy]')](_0x3e1f('‮99','S#MA')+$[_0x3e1f('‫10c','71Qt')]+_0x3e1f('‫10d','2fyF')+power+'能量');}else{_0x35bbd9['Svyhr'](_0xce845c);}}}});});}function getGift(){var _0x1bb1e1={'TXhZm':function(_0x4b693e,_0x13893c){return _0x4b693e!==_0x13893c;},'VKHkp':function(_0x21092f,_0x3124ba){return _0x21092f==_0x3124ba;},'OEbsT':'qYHUd','HLdGd':function(_0xad7d2e,_0x2b49f2){return _0xad7d2e===_0x2b49f2;},'xASZu':_0x3e1f('‫10e','KmXY'),'UcNhx':'AfKHG','OXIcC':_0x3e1f('‫10f','V2fj'),'veFxy':function(_0x4db279,_0x4a9f8d){return _0x4db279(_0x4a9f8d);}};let _0x24701b=_0x1bb1e1['veFxy'](Get_request,'miningTask/getGift?id=gift&type=bubbleList');return new Promise((_0x31823b,_0xf6a781)=>{var _0x1e7004={'BTBbI':function(_0x4b0af1,_0x416ab9){return _0x4b0af1===_0x416ab9;},'pbfZu':_0x3e1f('‮110','V2fj'),'XVnxE':function(_0x25e906,_0x221d25){return _0x1bb1e1[_0x3e1f('‫111','4T)r')](_0x25e906,_0x221d25);},'vlOPw':_0x3e1f('‮112','J!^e'),'fHwKX':'lBARs','Bmbab':function(_0x473aaa,_0x2c2ad1){return _0x1bb1e1[_0x3e1f('‫113','S#MA')](_0x473aaa,_0x2c2ad1);},'ueQeP':_0x1bb1e1['OEbsT'],'NBXAd':_0x3e1f('‫114','pQC]'),'UPZoF':'YPIOr','yMxqe':function(_0x47357c,_0x3bdfe0){return _0x1bb1e1[_0x3e1f('‮115','koXI')](_0x47357c,_0x3bdfe0);},'sSaCB':_0x1bb1e1[_0x3e1f('‫116','VhPP')]};if(_0x1bb1e1['TXhZm'](_0x1bb1e1[_0x3e1f('‫117','KmXY')],_0x1bb1e1[_0x3e1f('‫118','y]]a')])){$[_0x3e1f('‮119','s[KO')](_0x24701b,async(_0x2f3169,_0x59cbc7,_0x4d1711)=>{var _0x26c123={'Fxcdi':function(_0x134053,_0x4629a2){return _0x134053==_0x4629a2;}};if(_0x1e7004[_0x3e1f('‮11a','YYtu')](_0x1e7004['pbfZu'],_0x1e7004[_0x3e1f('‫11b','s[KO')])){try{if(_0x1e7004[_0x3e1f('‮11c','35yE')](_0x1e7004[_0x3e1f('‮11d','YYtu')],_0x3e1f('‫11e','g(KX'))){if(_0x2f3169){console[_0x3e1f('‮11f','dtQ1')](_0x3e1f('‫120','[WDh')+$[_0x3e1f('‮121','TlA(')]+_0x3e1f('‮122','%1Lb'));subTitle+=_0x3e1f('‮99','S#MA')+$[_0x3e1f('‫123',')LLg')]+_0x3e1f('‫124','dKu6');}else{if(_0x1e7004[_0x3e1f('‮125','T#[I')]===_0x1e7004[_0x3e1f('‮126','dtQ1')]){let _0x48d20d=JSON[_0x3e1f('‫127','q(S0')](_0x4d1711);if(_0x1e7004[_0x3e1f('‫128','TlA(')](_0x48d20d['errCode'],0x0)){if(_0x1e7004[_0x3e1f('‮129','T#[I')](_0x1e7004[_0x3e1f('‫12a','W7(3')],_0x1e7004[_0x3e1f('‮12b',']f)K')])){console['log'](_0x3e1f('‮5d','s[KO')+$['index']+'\x20领新手礼包】:\x20获得\x20'+_0x48d20d['data']['rewardNum']+_0x3e1f('‫12c',']f)K'));}else{_0x31823b();}}else{if(_0x1e7004[_0x3e1f('‫12d','KoQr')](_0x1e7004['NBXAd'],_0x1e7004['UPZoF'])){console['log'](e,_0x59cbc7);}else{console[_0x3e1f('‫12e','zv*r')](_0x3e1f('‮12f',']f)K')+$[_0x3e1f('‫130','leyO')]+'\x20领新手礼包】:\x20'+_0x48d20d[_0x3e1f('‮131',']zf!')]);}}}else{console[_0x3e1f('‮132','a^k4')](e,_0x59cbc7);}}}else{console[_0x3e1f('‮133','UvSu')](_0x3e1f('‮134',']Uy]')+$[_0x3e1f('‫135','V2fj')]+_0x3e1f('‮136','0SLv'));subTitle+=_0x3e1f('‮137','%1Lb')+$[_0x3e1f('‮138','GqAy')]+_0x3e1f('‫139',']zf!');}}catch(_0x2a1f86){console['log'](_0x2a1f86,_0x59cbc7);}finally{if(_0x1e7004[_0x3e1f('‮13a',']f)K')]('bYQzt',_0x1e7004[_0x3e1f('‮13b','VhPP')])){console['log'](_0x3e1f('‫13c','zv*r')+$['index']+_0x3e1f('‮13d','V2fj'));subTitle+=_0x3e1f('‫fb','dtQ1')+$[_0x3e1f('‮13e','SIh4')]+_0x3e1f('‮13f','W7(3');}else{_0x31823b();}}}else{let _0x6c526f=JSON[_0x3e1f('‮140','a^k4')](_0x4d1711);if(_0x26c123['Fxcdi'](_0x6c526f[_0x3e1f('‫141','pQC]')],0x0)){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‮142','q(S0')]+_0x3e1f('‮143','GqAy')+_0x6c526f[_0x3e1f('‫144','0SLv')]+_0x3e1f('‫145','UvSu')+_0x6c526f[_0x3e1f('‮146','y]]a')]['rewardPower']+_0x3e1f('‮147',']zf!'));}else{console['log'](_0x3e1f('‮148','GqAy')+$[_0x3e1f('‫149','KoQr')]+_0x3e1f('‫102','mqD3')+_0x6c526f['errMsg']);}}});}else{console[_0x3e1f('‮14a','0SLv')](_0x3e1f('‮14b','wlt0')+$[_0x3e1f('‮cd','pQC]')]+_0x3e1f('‫14c','y]]a')+result['errMsg']);}});}function searchList(){var _0x5ca16b={'FTzby':'WFTAm','rAYJo':function(_0x15befa,_0x42cdbd){return _0x15befa==_0x42cdbd;},'XevXB':function(_0x549b34,_0x1069c3){return _0x549b34*_0x1069c3;},'xWgdd':function(_0x2571f5,_0x3ca410){return _0x2571f5(_0x3ca410);},'tSHZP':_0x3e1f('‫14d','leyO'),'PHSOu':function(_0x48f1b6){return _0x48f1b6();},'mZmyX':function(_0x2943c0,_0x465b13){return _0x2943c0===_0x465b13;},'iqKAW':_0x3e1f('‫14e','KmXY')};let _0x22240d=Get_request(_0x3e1f('‫14f','0SLv'));return new Promise((_0x3ceafe,_0x5acd21)=>{var _0x5e26ad={'QFSEh':function(_0x362b5f){return _0x5ca16b[_0x3e1f('‫150','T#[I')](_0x362b5f);}};if(_0x5ca16b['mZmyX'](_0x3e1f('‮151','%1Lb'),_0x5ca16b[_0x3e1f('‫152','V2fj')])){console[_0x3e1f('‫153','leyO')](_0x3e1f('‮154','T#[I')+$[_0x3e1f('‮155','wlt0')]+_0x3e1f('‮156','35yE')+result[_0x3e1f('‮157','5e$T')][_0x3e1f('‮158','Bpel')]+_0x3e1f('‫159','KoQr'));}else{$[_0x3e1f('‫15a',']zf!')](_0x22240d,async(_0x529dbf,_0x2fb764,_0x39eabb)=>{try{if(_0x529dbf){if(_0x5ca16b['FTzby']!==_0x5ca16b[_0x3e1f('‫15b','KoQb')]){console[_0x3e1f('‫44','koXI')](_0x3e1f('‮15c','35yE')+$[_0x3e1f('‮c2','s[KO')]+_0x3e1f('‮15d','VhPP')+result[_0x3e1f('‮15e','wlt0')]);}else{console[_0x3e1f('‮15f','S#MA')](_0x3e1f('‫160','ufvW')+$[_0x3e1f('‫161','2JT3')]+_0x3e1f('‮162','J!^e'));subTitle+=_0x3e1f('‫163','YYtu')+$[_0x3e1f('‮32','[xrM')]+_0x3e1f('‫164','Kdw)');}}else{let _0xda6097=JSON[_0x3e1f('‫165',']f)K')](_0x39eabb);if(_0x5ca16b['rAYJo'](_0xda6097[_0x3e1f('‫166','nxx(')],0x0)){let _0x27f0bc=Math['floor'](_0x5ca16b['XevXB'](Math[_0x3e1f('‮167','2N*I')](),0x14-0x0)+0x0);await _0x5ca16b[_0x3e1f('‫168','UvSu')](getsearch,_0xda6097[_0x3e1f('‫169','GqAy')][_0x3e1f('‫16a','KoQr')][_0x27f0bc]['goodsId']);}else{if(_0x5ca16b[_0x3e1f('‫16b','35yE')]==='pyZDL'){_0x5e26ad['QFSEh'](_0x3ceafe);}else{console[_0x3e1f('‫16c','4T)r')]('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‫16d','ufvW')]+_0x3e1f('‫16e','Ix@H')+_0xda6097['errMsg']);}}}}catch(_0x348db7){console[_0x3e1f('‮15f','S#MA')](_0x348db7,_0x2fb764);}finally{_0x3ceafe();}});}});}function getsearch(_0x23b09f){var _0x39338d={'KNuAc':function(_0x248afb,_0x231370){return _0x248afb!==_0x231370;},'pgMHs':_0x3e1f('‮16f','J!^e'),'gCLiW':function(_0xc97d16,_0x444399){return _0xc97d16==_0x444399;},'rdXEB':_0x3e1f('‫170','V2fj'),'YmDEH':function(_0x109a61,_0x85babf){return _0x109a61!==_0x85babf;},'ToumU':_0x3e1f('‫171','S#MA'),'Hesac':function(_0x2c22cc,_0xe5baa6){return _0x2c22cc(_0xe5baa6);}};let _0x11cd20=_0x39338d['Hesac'](Get_request,'miningTask/getGift?id=share&type=taskList&refId='+_0x23b09f);return new Promise((_0x5d389f,_0x5df16c)=>{$[_0x3e1f('‮172','4T)r')](_0x11cd20,async(_0x1aa8e1,_0x5a9ec9,_0xd7125d)=>{if(_0x39338d['KNuAc'](_0x39338d[_0x3e1f('‫173','leyO')],'aKWgK')){try{if(_0x1aa8e1){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‫174','J!^e')]+'\x20分享收益】:\x20网络请求失败');subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+_0x3e1f('‮175','GqAy');}else{let _0x5809db=JSON[_0x3e1f('‫176','ufvW')](_0xd7125d);if(_0x39338d[_0x3e1f('‫177','KmXY')](_0x5809db[_0x3e1f('‫178','dKu6')],0x0)){if(_0x3e1f('‫179','T#[I')!==_0x39338d['rdXEB']){console['log'](_0x3e1f('‮17a','VhPP')+$[_0x3e1f('‮121','TlA(')]+_0x3e1f('‮17b','ufvW'));subTitle+=_0x3e1f('‫163','YYtu')+$['index']+'\x20签到状态】:\x20网络请求失败';}else{console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‮17c','2fyF')]+_0x3e1f('‫17d','zv*r')+_0x5809db[_0x3e1f('‫b5','ufvW')]);}}else{if(_0x39338d['YmDEH'](_0x3e1f('‫17e','ufvW'),_0x39338d['ToumU'])){console['log'](_0x3e1f('‫17f','[xrM')+$[_0x3e1f('‮cd','pQC]')]+_0x3e1f('‮180','[WDh')+_0x5809db[_0x3e1f('‫181',']f)K')]);}else{console[_0x3e1f('‫182','J!^e')](_0x3e1f('‫fb','dtQ1')+$[_0x3e1f('‫183','a^k4')]+_0x3e1f('‫184','y]]a'));}}}}catch(_0x1657a3){console[_0x3e1f('‫185','SIh4')](_0x1657a3,_0x5a9ec9);}finally{_0x5d389f();}}else{let _0x4517c3=JSON[_0x3e1f('‫186','y]]a')](_0xd7125d);if(_0x4517c3[_0x3e1f('‮187',']f)K')]==0x0){console['log'](_0x3e1f('‫188','pQC]')+$[_0x3e1f('‮c2','s[KO')]+_0x3e1f('‫189','dKu6'));}else{console[_0x3e1f('‫185','SIh4')](_0x3e1f('‫18a',']zf!')+$[_0x3e1f('‮155','wlt0')]+_0x3e1f('‫18b','wlt0')+_0x4517c3['errMsg']);}}});});}function getPowe(){var _0x371fd0={'eIEhK':function(_0x3c85a2){return _0x3c85a2();},'sBvSh':function(_0x34938c,_0x433dcd){return _0x34938c!==_0x433dcd;},'jlpuV':'nAVgb','CvrUC':_0x3e1f('‫18c','2N*I'),'awmij':_0x3e1f('‮18d','W7(3'),'tTFoh':_0x3e1f('‫18e','SIh4'),'NRGss':'TWPHC','EzTQt':function(_0x21f00c,_0x3a9b05){return _0x21f00c(_0x3a9b05);}};let _0x1fb654=_0x371fd0[_0x3e1f('‫18f','nxx(')](Get_request,'mining/getPower');return new Promise((_0x2f3ce7,_0x25aa88)=>{var _0x45c3ad={'kDPdr':function(_0x177d4d){return _0x371fd0[_0x3e1f('‮190','Ix@H')](_0x177d4d);},'BeDFc':function(_0x5693b4,_0x1b51f7){return _0x371fd0['sBvSh'](_0x5693b4,_0x1b51f7);},'ocfkB':_0x371fd0[_0x3e1f('‮191','UvSu')],'MstZM':_0x371fd0[_0x3e1f('‮192','s[KO')],'HKlzv':_0x371fd0['awmij'],'UmGRT':_0x371fd0[_0x3e1f('‮193','dKu6')],'muZLB':_0x371fd0['NRGss']};$[_0x3e1f('‮194','dtQ1')](_0x1fb654,async(_0x461d98,_0x4067ab,_0x361a24)=>{if(_0x45c3ad['BeDFc'](_0x45c3ad['ocfkB'],_0x3e1f('‫195','D0IJ'))){try{if(_0x45c3ad[_0x3e1f('‫196','pQC]')]!==_0x45c3ad[_0x3e1f('‫197','0SLv')]){console['log'](_0x3e1f('‮198','Kdw)')+$['index']+_0x3e1f('‮199','5e$T'));subTitle+=_0x3e1f('‮19a','Ix@H')+$['index']+_0x3e1f('‫19b','s[KO');}else{if(_0x461d98){if(_0x45c3ad[_0x3e1f('‮19c','s[KO')](_0x3e1f('‮19d','1(F]'),_0x45c3ad[_0x3e1f('‮19e','sj4p')])){console[_0x3e1f('‮11f','dtQ1')]('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‮19f',']f)K')]+_0x3e1f('‫1a0','dKu6'));subTitle+=_0x3e1f('‫18a',']zf!')+$['index']+'\x20能量礼包】:\x20网络请求失败';}else{app_soy_kt_data=process[_0x3e1f('‮1a1','Kdw)')][_0x3e1f('‫1a2','dtQ1')][_0x3e1f('‫1a3','s[KO')]();}}else{if(_0x45c3ad['UmGRT']!==_0x45c3ad[_0x3e1f('‮1a4','V2fj')]){console['log'](e,_0x4067ab);}else{let _0x5bda3f=JSON['parse'](_0x361a24);if(_0x5bda3f[_0x3e1f('‮1a5','ufvW')]==0x0){console[_0x3e1f('‮a9','Kdw)')]('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‫1a6','nxx(')]+_0x3e1f('‫1a7','SIh4'));}else{if(_0x3e1f('‫1a8','zv*r')!=='ewUWc'){_0x45c3ad[_0x3e1f('‫1a9','35yE')](_0x2f3ce7);}else{console['log'](_0x3e1f('‮198','Kdw)')+$[_0x3e1f('‮1aa','YYtu')]+_0x3e1f('‮1ab','Kdw)')+_0x5bda3f[_0x3e1f('‫1ac',')LLg')]);}}}}}}catch(_0x2c82e7){console['log'](_0x2c82e7,_0x4067ab);}finally{if(_0x45c3ad['BeDFc'](_0x3e1f('‮1ad','2N*I'),_0x45c3ad[_0x3e1f('‫1ae','S#MA')])){_0x2f3ce7();}else{_0x2f3ce7();}}}else{console[_0x3e1f('‫31',']f)K')](_0x3e1f('‮1af','V2fj')+$['index']+'\x20签到】:\x20'+result['errMsg']+_0x3e1f('‫1b0','V2fj')+result[_0x3e1f('‮1b1',')LLg')][_0x3e1f('‮1b2','1(F]')]+_0x3e1f('‫1b3','sj4p'));}});});}function getVideo(){var _0xa5b5bb={'LwpjC':function(_0x4e36d8,_0x3a26db){return _0x4e36d8==_0x3a26db;},'FqIXO':function(_0x35add7,_0x5e7039){return _0x35add7!==_0x5e7039;},'aIRYQ':'QtbBo','htcwF':_0x3e1f('‮1b4','pQC]'),'KnIiO':'hzKLJ','VFDqY':_0x3e1f('‮1b5','s[KO'),'RHqqz':_0x3e1f('‫1b6',']Uy]'),'ZzHXB':function(_0x3cad42){return _0x3cad42();},'NJIpT':function(_0x535a7d,_0x516c6c){return _0x535a7d!==_0x516c6c;},'FQDDd':_0x3e1f('‫1b7','1(F]'),'kqsAh':function(_0xb2cbaa,_0x5b802e){return _0xb2cbaa+_0x5b802e;},'WoFkN':function(_0x188d18,_0x2900d1){return _0x188d18(_0x2900d1);}};let _0x4d65b6=crypto[_0x3e1f('‫1b8','a^k4')](_0xa5b5bb[_0x3e1f('‫1b9','KoQb')](token,Math[_0x3e1f('‮1ba','T#[I')](new Date()[_0x3e1f('‫1bb','D0IJ')]())))[_0x3e1f('‮1bc','T#[I')]();let _0x17aae4=_0xa5b5bb['WoFkN'](Get_request,_0x3e1f('‫1bd','[xrM')+_0x4d65b6);return new Promise((_0x19b6ec,_0x57cee3)=>{var _0x570ae2={'mvTNr':function(_0x31cf38,_0x2e20c1){return _0xa5b5bb[_0x3e1f('‮1be','a^k4')](_0x31cf38,_0x2e20c1);},'TvGJh':function(_0x6f2817,_0x17e107){return _0xa5b5bb[_0x3e1f('‫1bf','pQC]')](_0x6f2817,_0x17e107);},'TmtAs':_0xa5b5bb[_0x3e1f('‫1c0','KoQr')],'CmiMe':function(_0x32064f,_0x3f3d2e){return _0x32064f===_0x3f3d2e;},'DEAZo':_0xa5b5bb[_0x3e1f('‮1c1','Kdw)')],'pjKtP':function(_0x37522f,_0x15ee7e){return _0xa5b5bb[_0x3e1f('‫1c2','2JT3')](_0x37522f,_0x15ee7e);},'njvjC':_0xa5b5bb[_0x3e1f('‫1c3','W7(3')],'fRDPc':_0xa5b5bb[_0x3e1f('‫1c4','V2fj')],'UXeab':_0xa5b5bb[_0x3e1f('‫1c5','KoQb')],'lBcdL':function(_0x5ba6ce){return _0xa5b5bb['ZzHXB'](_0x5ba6ce);}};if(_0xa5b5bb['NJIpT'](_0xa5b5bb[_0x3e1f('‫1c6','J!^e')],_0xa5b5bb['FQDDd'])){app_soy_kt_data=process[_0x3e1f('‫1c7','dtQ1')][_0x3e1f('‮1c8','W7(3')]['split']('\x0a');}else{$['get'](_0x17aae4,async(_0x298576,_0x4b1e55,_0x2a7bbe)=>{if(_0x570ae2[_0x3e1f('‮1c9','KoQb')](_0x570ae2[_0x3e1f('‫1ca','s[KO')],_0x3e1f('‮1cb','UvSu'))){try{if(_0x570ae2['CmiMe'](_0x3e1f('‮1b4','pQC]'),_0x570ae2['DEAZo'])){if(_0x298576){console[_0x3e1f('‫fa','35yE')](_0x3e1f('‫5b','2JT3')+$[_0x3e1f('‫1cc','dKu6')]+_0x3e1f('‫1cd','GqAy'));subTitle+=_0x3e1f('‮198','Kdw)')+$[_0x3e1f('‫1a6','nxx(')]+_0x3e1f('‫1ce','s[KO');}else{let _0x226073=JSON['parse'](_0x2a7bbe);if(_0x570ae2[_0x3e1f('‫1cf','Kdw)')](_0x226073[_0x3e1f('‫1d0','W7(3')],0x0)){if(_0x570ae2[_0x3e1f('‮1d1','YYtu')](_0x3e1f('‮1d2','V2fj'),'PFefo')){console['log'](_0x3e1f('‫1d3','0SLv')+$[_0x3e1f('‫149','KoQr')]+_0x3e1f('‫1d4','71Qt'));subTitle+=_0x3e1f('‮f7','KmXY')+$['index']+_0x3e1f('‫1d5','s[KO');}else{console[_0x3e1f('‮1d6','mqD3')](_0x3e1f('‮137','%1Lb')+$[_0x3e1f('‮1d7','35yE')]+_0x3e1f('‫1d8','koXI'));}}else{if(_0x570ae2[_0x3e1f('‫1d9','W7(3')]===_0x570ae2[_0x3e1f('‮1da','2JT3')]){let _0x172bf8=JSON[_0x3e1f('‫1db','35yE')](_0x2a7bbe);if(_0x570ae2[_0x3e1f('‫1dc','J!^e')](_0x172bf8[_0x3e1f('‮1dd','T#[I')],0x0)){console[_0x3e1f('‫31',']f)K')](_0x3e1f('‫1de','UvSu')+$[_0x3e1f('‫c4','g(KX')]+'\x20充电】:\x20成功充电'+power+'能量');}else{console[_0x3e1f('‮8c','GqAy')](_0x3e1f('‫fb','dtQ1')+$[_0x3e1f('‮1df','sj4p')]+'\x20充电】:\x20'+_0x172bf8['errMsg']);}}else{console[_0x3e1f('‮11f','dtQ1')]('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‮c2','s[KO')]+_0x3e1f('‫1e0','[xrM')+_0x226073['errMsg']);}}}}else{console[_0x3e1f('‫fa','35yE')](_0x3e1f('‮f7','KmXY')+$[_0x3e1f('‮c2','s[KO')]+_0x3e1f('‫1e1','UvSu'));subTitle+='\x0a【soy脚本提示---账号\x20'+$['index']+'\x20分享收益】:\x20网络请求失败';}}catch(_0x4fed25){if(_0x570ae2[_0x3e1f('‮1e2','UvSu')]===_0x570ae2[_0x3e1f('‮1e3','SIh4')]){console['log'](_0x4fed25,_0x4b1e55);}else{console[_0x3e1f('‮1e4','KoQr')](_0x3e1f('‮19a','Ix@H')+$['index']+'\x20分享收益】:\x20'+result[_0x3e1f('‫1e5','5e$T')]);}}finally{if(_0x3e1f('‮1e6','J!^e')==='lPMlJ'){_0x570ae2[_0x3e1f('‫1e7','[xrM')](_0x19b6ec);}else{console[_0x3e1f('‫1e8','nxx(')](_0x3e1f('‮154','T#[I')+$[_0x3e1f('‫5c','2N*I')]+_0x3e1f('‮1e9','W7(3')+result[_0x3e1f('‮1ea','D0IJ')]);}}}else{console[_0x3e1f('‮15f','S#MA')](e,_0x4b1e55);}});}});}function addPower(_0x41c8c8){var _0x2837f3={'KNOxd':function(_0xbac689,_0x4e5112){return _0xbac689===_0x4e5112;},'oJdhQ':'JCVXT','WOIxD':function(_0x1477da,_0xb72274){return _0x1477da!==_0xb72274;},'SGyzt':'euhrx','NCerX':_0x3e1f('‮1eb','UvSu'),'uROik':function(_0x1258bd,_0x28c119){return _0x1258bd==_0x28c119;},'qEUGw':function(_0x17099d){return _0x17099d();}};let _0x4d3aac=Get_request(_0x3e1f('‮1ec','YYtu')+_0x41c8c8);return new Promise((_0x3862f5,_0x2df9bb)=>{$['get'](_0x4d3aac,async(_0x18a1d4,_0x16c406,_0x151423)=>{if(_0x2837f3[_0x3e1f('‫1ed','2JT3')]('BRjii',_0x2837f3['oJdhQ'])){console[_0x3e1f('‮11f','dtQ1')](e,_0x16c406);}else{try{if(_0x18a1d4){if(_0x2837f3[_0x3e1f('‮1ee','dKu6')](_0x2837f3[_0x3e1f('‮1ef','D0IJ')],_0x2837f3[_0x3e1f('‮1f0','zv*r')])){console['log'](_0x3e1f('‮1f1','koXI')+$[_0x3e1f('‮1f2','UvSu')]+_0x3e1f('‮1f3','T#[I'));subTitle+=_0x3e1f('‫160','ufvW')+$['index']+_0x3e1f('‮1f4','J!^e');}else{console[_0x3e1f('‫1f5','ufvW')](_0x3e1f('‮1af','V2fj')+$[_0x3e1f('‮1f6','mqD3')]+_0x3e1f('‮1f7','YYtu'));subTitle+=_0x3e1f('‮1f8','2N*I')+$[_0x3e1f('‫1f9',']Uy]')]+_0x3e1f('‮1fa','0SLv');}}else{let _0x502529=JSON['parse'](_0x151423);if(_0x2837f3[_0x3e1f('‫1fb','71Qt')](_0x502529[_0x3e1f('‮1fc','VhPP')],0x0)){console['log']('\x0a【soy脚本提示---账号\x20'+$[_0x3e1f('‫1fd','[WDh')]+_0x3e1f('‫1fe',')LLg')+_0x41c8c8+'能量');}else{console[_0x3e1f('‮1ff','71Qt')](_0x3e1f('‮200','dKu6')+$['index']+'\x20充电】:\x20'+_0x502529[_0x3e1f('‮201','leyO')]);}}}catch(_0x5a518b){console[_0x3e1f('‮a9','Kdw)')](_0x5a518b,_0x16c406);}finally{_0x2837f3[_0x3e1f('‫202','KoQr')](_0x3862f5);}}});});}function Post_request(_0x9257d9,_0x2ff04d){var _0x2def28={'yAMYE':'keep-alive','jptWa':_0x3e1f('‫203','nxx('),'fhtPV':_0x3e1f('‫204','a^k4'),'vMArZ':'yingyongbao','XvguR':_0x3e1f('‫205','pQC]'),'IYyHw':'1.2.3(25)','JHZbP':_0x3e1f('‫206','VhPP'),'aINdE':'same-site','zIwkz':_0x3e1f('‮207','mqD3'),'nkEfT':_0x3e1f('‮208','1(F]'),'YaPnA':_0x3e1f('‫209',']zf!'),'jCbLh':_0x3e1f('‫20a','4T)r'),'rXcMK':_0x3e1f('‫20b','leyO')};let _0x283fd6=Math[_0x3e1f('‫20c',')LLg')](new Date()['getTime']());return{'url':_0x3e1f('‫20d','y]]a')+_0x9257d9,'headers':{'Host':'api.ketui.cn','Connection':_0x2def28['yAMYE'],'Pragma':_0x3e1f('‫20e','wlt0'),'Cache-Control':_0x2def28[_0x3e1f('‮20f','%1Lb')],'deviceId':_0x2def28[_0x3e1f('‫210',')LLg')],'ts':_0x283fd6,'appChannel':_0x2def28['vMArZ'],'Authorization':token,'Accept':_0x3e1f('‮211','35yE'),'User-Agent':_0x2def28[_0x3e1f('‫212','[xrM')],'osType':_0x3e1f('‫213','VhPP'),'appId':'vh','appVersion':_0x2def28[_0x3e1f('‮214','leyO')],'Origin':_0x3e1f('‮215','ufvW'),'X-Requested-With':_0x2def28[_0x3e1f('‫216','35yE')],'Sec-Fetch-Site':_0x2def28['aINdE'],'Sec-Fetch-Mode':_0x2def28[_0x3e1f('‫217','koXI')],'Sec-Fetch-Dest':_0x2def28['nkEfT'],'Referer':_0x2def28[_0x3e1f('‫218','[WDh')],'Accept-Encoding':_0x2def28[_0x3e1f('‮219',']f)K')],'Accept-Language':_0x2def28['rXcMK']},'body':_0x2ff04d};};function Get_request(_0x870a8){var _0x2bd9e4={'fGbOu':_0x3e1f('‫21a','dtQ1'),'SevGc':_0x3e1f('‮21b','[xrM'),'NjKwA':_0x3e1f('‮21c','KmXY'),'Jdyha':'yingyongbao','cszHa':_0x3e1f('‮21d','ufvW'),'IGsNa':_0x3e1f('‫205','pQC]'),'ZGsDr':'android','ccgOZ':_0x3e1f('‫21e',']Uy]'),'rAbiY':_0x3e1f('‫21f','q(S0'),'EUkoO':_0x3e1f('‫220','g(KX'),'swwSl':_0x3e1f('‫221',')LLg'),'VizIf':_0x3e1f('‮222',']zf!'),'GTbCN':_0x3e1f('‮223','GqAy'),'bmfDS':_0x3e1f('‮224','TlA('),'UpWKl':_0x3e1f('‮225','dtQ1')};let _0x391ef7=Math[_0x3e1f('‫226','Kdw)')](new Date()[_0x3e1f('‮227','W7(3')]());return{'url':'https://api.ketui.cn/video-helper/'+_0x870a8,'headers':{'Host':_0x3e1f('‫228','2JT3'),'Connection':_0x2bd9e4['fGbOu'],'Pragma':_0x2bd9e4[_0x3e1f('‫229','dKu6')],'Cache-Control':_0x2bd9e4[_0x3e1f('‫22a','s[KO')],'deviceId':_0x2bd9e4[_0x3e1f('‮22b','[xrM')],'ts':_0x391ef7,'appChannel':_0x2bd9e4[_0x3e1f('‮22c','VhPP')],'Authorization':token,'Accept':_0x2bd9e4['cszHa'],'User-Agent':_0x2bd9e4[_0x3e1f('‫22d','Ix@H')],'osType':_0x2bd9e4[_0x3e1f('‮22e','Ix@H')],'appId':'vh','appVersion':_0x2bd9e4[_0x3e1f('‫22f','35yE')],'Origin':_0x2bd9e4['rAbiY'],'X-Requested-With':_0x2bd9e4[_0x3e1f('‫230','KmXY')],'Sec-Fetch-Site':_0x2bd9e4['swwSl'],'Sec-Fetch-Mode':_0x2bd9e4[_0x3e1f('‫231','SIh4')],'Sec-Fetch-Dest':_0x2bd9e4['GTbCN'],'Referer':_0x3e1f('‫232','71Qt'),'Accept-Encoding':_0x2bd9e4[_0x3e1f('‫233','J!^e')],'Accept-Language':_0x2bd9e4[_0x3e1f('‮234','KoQr')]}};};_0xodE='jsjiami.com.v6';


function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
