#import "AppDelegate.h"
#import <NaverThirdPartyLogin/NaverThirdPartyLoginConnection.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <GoogleSignIn/GoogleSignIn.h>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"nonabangAppFront";
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

// URL을 처리하는 openURL 메서드 추가
- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  NSLog(@"Received URL: %@", url);
   BOOL handledByGoogle = [GIDSignIn.sharedInstance handleURL:url];
   BOOL handledByNaver = [[NaverThirdPartyLoginConnection getSharedInstance] application:application openURL:url options:options];
   
   NSLog(@"Handled by Google: %d, Handled by Naver: %d", handledByGoogle, handledByNaver);
   return handledByGoogle || handledByNaver;
}

@end
