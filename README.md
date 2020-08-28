# cfx-server-data
_Server boilerplate by outrowender_

# Start in localhost

1. In root folder:
Windows:
```win-server\FXServer.exe +exec server.cfg```

## Usage
1. Make sure to `git clone`. Don't "Download ZIP", as that'll make it _much_ harder to update to newer versions.
2. Put custom resources in `resources/[local]/` if you don't want to be affected by any random messups.

### Advanced usage
You can also consider using the repository as a submodule + symlink for your own Git repository:

**Linux**:
```
$ git submodule add https://github.com/citizenfx/cfx-server-data.git vendor/server-data
$ ln -s vendor/server-data/resources/ 'resources/[base]/'
```

**Windows**:
```
> git submodule add https://github.com/citizenfx/cfx-server-data.git vendor/server-data
> mklink /d resources\[base] vendor\server-data\resources
```

## Policy
You can make pull requests to propose changes that benefit _everyone_. Add new useful resources, change/improve
existing ones - anything goes, as long as you make sure to:

1. Not break existing users/APIs.
2. Not change default behavior without a toggle.
3. Use best practices (convars over config files, native commands wherever possible, etc.)

Modifying or rewriting existing resources in this repository for local use only is _strongly_ discouraged.

## Credits

Entire code or some part of:

HUD:
* https://github.com/bepo13/FiveM-SimpleCarHUD
* https://github.com/KlibrDM/noradar_speedometer