using Microsoft.AspNetCore.Mvc;

namespace TeamApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeamController : ControllerBase
{
    private static readonly string[] Teams = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<TeamController> _logger;

    public TeamController(ILogger<TeamController> logger)
    {
        _logger = logger;
    }

    [HttpGet("GetTeams")]
    public IEnumerable<string> GetTeams()
    {
        return Teams.ToArray();
    }
}
