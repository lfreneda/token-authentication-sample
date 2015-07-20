using System.Collections.Generic;
using Nancy;
using Nancy.Authentication.Token;
using Nancy.Bootstrapper;
using Nancy.Security;
using Nancy.TinyIoc;

namespace TokenAuthenticationSample.WebApi
{
    public class AuthModule : NancyModule
    {
        public AuthModule(ITokenizer tokenizer)
            : base("/auth")
        {
            Post["/"] = x =>
            {
                var userName = (string)this.Request.Form.UserName;
                var password = (string)this.Request.Form.Password;

                var userIdentity = UserDatabase.ValidateUser(userName, password);

                if (userIdentity == null)
                {
                    return HttpStatusCode.Unauthorized;
                }

                var token = tokenizer.Tokenize(userIdentity, Context);

                return new
                {
                    Token = token,
                };
            };

            Get["/validation"] = _ =>
            {
                this.RequiresAuthentication();

                return "Yay! You are authenticated!";
            };

            Get["/admin"] = _ =>
            {
                this.RequiresClaims(new[] { "admin" });

                return "Yay! You are authorized!";
            };
        }
    }

    public class UserDatabase
    {
        public static IUserIdentity ValidateUser(string userName, string password)
        {
            if (userName == "Luiz" && password == "Freneda")
            {
                return new UserIdentity
                {
                    UserName = "Luiz",
                    Claims = new[]
                    {
                        "admin", "owner" 
                    }
                };
            }

            return null;
        }
    }

    public class UserIdentity : IUserIdentity
    {
        public string UserName { get; set; }
        public IEnumerable<string> Claims { get; set; }
    }

    public class TokenAuthBootstrapper : DefaultNancyBootstrapper
    {
        protected override void ConfigureApplicationContainer(TinyIoCContainer container)
        {
            container.Register<ITokenizer>(new Tokenizer());
        }

        protected override void RequestStartup(TinyIoCContainer container, IPipelines pipelines, NancyContext context)
        {
            TokenAuthentication.Enable(pipelines, new TokenAuthenticationConfiguration(container.Resolve<ITokenizer>()));
        }
    }
}