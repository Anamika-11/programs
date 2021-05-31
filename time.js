<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '#include<iostream>
using namespace std;
 
void print24(string str)
{
    int h1 = (int)str[1] - \'0\';
    int h2 = (int)str[0] - \'0\';
    int hh = (h2 * 10 + h1 % 10);
    int h3 = (int)str[3] - \'0\';
    int h4 = (int)str[4] - \'0\';
    int hh1 = (h3 * 10 + h4 % 10)+45;
    int h5 = (int)str[6] - \'0\';
    int h6 = (int)str[7] - \'0\';
    int hh2 = (h5 * 10 + h6 % 10)+45;
    if(hh2>=60){hh2=hh2-60;
        hh1=hh1+1;
    }
    if(hh1>=60){hh1=hh1-60;
        hh=hh+1;
    }
    if(hh>12){
        hh=hh-12;
    }
    if (str[8] == \'A\')
    {
        if (hh == 12)
        {
            cout << "00:"<<hh1<<":"<<hh2;
        }
        else
        {
            cout <<hh<<":"<<hh1<<":"<<hh2;
        }
    }
    else
    {
        if (hh == 12)
        {
            cout << "12:"<<hh1<<":"<<hh2;
        }
        else
        {
            hh = hh + 12;
            cout <<hh<<":"<<hh1<<":"<<hh2;
        }
    }
}
int main()
{
   string str;
   cin>>str;
   print24(str);
   return 0;
}'

document.write(pagecode);

</script>