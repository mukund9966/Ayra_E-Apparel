using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Error
{
    public class Apiresponse
    {
        public Apiresponse(int statusCode, string message = null)
        {
            this.statusCode = statusCode;
            this.message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
return statusCode switch
{
400 => "A bad request, you have made",
401 => "Authorized, you are not",
404 => "Resource found, it was not",
500 => "Errors are the path to the dark side. Errors lead to anger. Anger leads to hate. Hate leads to career change",
_ => null
};
        }

        public int statusCode {get; set;}
        public string message {get; set;}
    }
}